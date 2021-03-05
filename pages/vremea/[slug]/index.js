import useSWR from 'swr';
import Head from 'next/head';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { gql, useQuery } from '@apollo/client';

// libs
import { initializeApollo } from '../../../lib/apolloClient'

// components
import Layout from '../../../components/layout';
import ListCities from '../../../components/listCities';
import CurrentWeather from '../../../components/currentweather';
import { formatForURL } from '../../../lib/strUtils';
import { fetcher } from '../../../lib/fetchUtils';
import MainAdBanner from '../../../components/main_ad_banner';
import FooterAdBanner from '../../../components/footer_ad_banner';

// data
import initWData from '../../../data/init_fday5_weather';

// graphQL
export const ALL_COUNTY_NAMES_QUERY = gql`
    {
        counties {
          id
          name
        }
    }
`;
export const COUNTY_QUERY = gql`
  query locationsByCounty($countyName: String!, $orderBy: account_cityOrderBy) {
    locationsByCounty(countyName: $countyName, orderBy: $orderBy) {
      id
      name
      account_county {
        id
        name
      }
      region
    }
  }
`;


export default function County({ countyQueryVars }) {

  let location;
  let locDetect = false;
  const { data: graphqlData } = useQuery(
    COUNTY_QUERY,
    {
      variables: countyQueryVars
    }
  );
  let { locationsByCounty } = graphqlData;
  let countyName = countyQueryVars.countyName;
  let region = '';
  if (locationsByCounty && locationsByCounty.length > 0) {
    countyName = locationsByCounty[0].account_county.name;
    region = locationsByCounty[0].region;
  };

  // set global SWR config
  let cwSwrConfig = {
    'initialData': { 'list': initWData.list, 'scity': initWData.city },
    'revalidateOnMount': true,
    'revalidateOnFocus': false,
    'revalidateOnReconnect': false,
    'dedupingInterval': 10*60*1000,
    'focusThrottleInterval': 10*60*1000,
    'errorRetryCount': 0
  };
  
  // ip geolocation
  const geoIpAPIUrlStr = process.env.NEXT_PUBLIC_FREEGEOIP_API;
  let geoIpAPIUrl = new URL(`${geoIpAPIUrlStr}/json/`);
  const { data: geoIpData, error: geoIpErr } = useSWR(geoIpAPIUrl, fetcher, cwSwrConfig);

  if (geoIpData && !geoIpErr) {
    // set location var
    location = {
      name: geoIpData.city,
      account_county: { name: geoIpData.region_name },
      latitude: geoIpData.latitude,
      longitude: geoIpData.longitude,
    };
    locDetect = true;
  }
  
  // set weather api params
  const openweatherApiUrl = process.env.NEXT_PUBLIC_OPENWEATHER_API_URL;
  const openweatherApiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  let url = new URL(`${openweatherApiUrl}/forecast`);
  let queryParams = {
    lat: location && location.latitude, 
    lon: location && location.longitude, 
    lang: 'ro',
    appid: openweatherApiKey,
    units: 'metric'
  };
  // call owm api
  Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]))
  const { data: weatherData, error } = useSWR(
    () => location.latitude ? url : null, fetcher, cwSwrConfig);

  // // get weather from nextjs api routes
  // const { data: weatherData, error } = useSWR(
  //   () => location.latitude ? `/api/myforecast?lat=${location.latitude}&lon=${location.longitude}&lang=ro` : null,
  //   fetcher, cwSwrConfig);

  // set title
  const title = `Vremea în județul ${countyName} - Meteo pe 15 zile`;

  // render
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta property="og:site_name" content={title}></meta>
        <meta property="og:title" content={`${title}`}></meta>
        <meta property="og:url" content="https://vremea.ionkom.com/"></meta>
        <meta
            name="description"
            content={`Vremea în județul ${countyName}. Prognoza meteo cu temperatura, precipitațiile, vântul si umiditatea pentru 15 zile. Vezi vremea pentru localitățile din ${countyName}`}
        />
      </Head>
      <Container>
        {/* current weather */}
        <Row className="mt-1">
          <Col>
            {location
              ? <CurrentWeather weatherData={weatherData.list && weatherData.list[0]} location={location} locDetect={locDetect} />
              : <h1 className="text-center">Vremea în județul {countyName}, regiunea {region}</h1>
            }
          </Col>
        </Row>
        {/* main ad banner */}
        <Row>
          <Col md={12}>
            <MainAdBanner />
          </Col>
        </Row>
        <Row className="mt-1">
          <Col xs={12}>
          <h2 style={{fontSize: "1.15rem"}}>Lista localităților din județul {countyName}</h2>
            <ListCities cities={locationsByCounty}/>
          </Col>
        </Row>
        {/* footer ad banner */}
        <Row>
          <Col>
            <FooterAdBanner />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: ALL_COUNTY_NAMES_QUERY,
  })
  let { counties } = data;

  return {
    paths: counties.map(county => ({
      params: {
        slug: formatForURL(county.name)
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  let countyName = params.slug;
  // todo find a better solution - quick fix
  if (countyName == 'satu-mare') countyName = countyName.replace('-', ' ');

  const countyQueryVars = {
    countyName,
    orderBy: {
      "name": "asc"
    }
  };
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: COUNTY_QUERY,
    variables: countyQueryVars
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      countyQueryVars
    },
    revalidate: 1,
  }
}