import Head from 'next/head'
import Link from 'next/link';
import useSWR from 'swr';
import { gql, useQuery } from '@apollo/client'
import { Container, Row, Col, Button } from 'react-bootstrap';

// local
// libs
import { initializeApollo } from '../../../lib/apolloClient'
import { formatForURL } from '../../../lib/strUtils';
import { fetcher } from '../../../lib/fetchUtils';

// components
import Layout from '../../../components/layout';
import CurrentWeather from '../../../components/currentweather'
import Daily3hWeather from '../../../components/daily3hweather'
import WeatherStatPair from '../../../components/weatherstatpair'
import MainAdBanner from '../../../components/main_ad_banner'

// data
import initWData from '../../../data/init_fday5_weather';



export const LOCATION_QUERY = gql`
  query location($locationId: Int!) {
    location(locationId: $locationId) {
      id
      county_id
      siruta
      longitude
      latitude
      name
      region
      account_county {
        id
        name
        code
      }
    }
  }
`;

export const ALL_LOCATIONS_QUERY = gql`
  {
    counties {
      name
      account_city {
        id
        name
      }
    }
  }
`;


export default function LocationCounty({ locationQueryVars, weatherDataInit }) {

  const { data: gqlData } = useQuery(
    LOCATION_QUERY,
    {
      variables: locationQueryVars
    }
  );
  let { location } = gqlData;

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

  // get weather
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
  // // call owm api
  // Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]))
  // const { data: weatherData, error } = useSWR(
  //   () => location.latitude ? url : null, fetcher, cwSwrConfig);

  // get weather from nextjs api routes
  const { data: weatherData, error } = useSWR(
    () => location.latitude ? `/api/myforecast?lat=${location.latitude}&lon=${location.longitude}&lang=ro` : null,
    fetcher, cwSwrConfig);  
  
  const title = `Vremea în ${location.name}, județul ${location.account_county.name} - Meteo pe 15 zile `
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
            content={`Vremea în ${location.name} și judetul ${location.account_county.name} regiunea ${location.region}. Starea vremii include temperatura, precipitațiile, vântul, vizibilitatea și indexul UV pt 15 zile. Buletin meteo curat și pe ințelesul tuturor.`}
        />
      </Head>
      <Container>
        {/* site title */}
        <Row className="mt-2">
          <Col>
            <h1 className="text-center">Vremea în {location.name}, județul {location.account_county.name}, {location.region}</h1>
          </Col>          
        </Row>
        {/* vremea curenta */}
        <hr/>
        <Row>
          <Col>
            <h2>Vremea acum</h2>
          </Col> 
        </Row>
        <hr style={{marginTop: 0}}/>
        <Row>
          <CurrentWeather weatherData={weatherData.list && weatherData.list[0]}/>
        </Row>
        {/* main ad banner */}
        <Row>
          <Col>
            <MainAdBanner />
          </Col>
        </Row>
        {/* vremea pe zile */}
        <Row>
          <Col>
            <h3>Vremea in urmatoarele zile</h3>
          </Col> 
        </Row>
        <hr style={{marginTop: 0}}/>
        <Row>
          <Daily3hWeather daily={weatherData.list} />
        </Row>
        {/* vremea 15 pe zile */}
        <Row>
          <Col>
            <h3>Prognoza meteo pe 15 zile</h3>
          </Col> 
        </Row>
        <hr style={{marginTop: 0}}/>
        <Row>
          <Col>
            <Button disabled>Cere raportul detaliat</Button>
          </Col>
        </Row>
        {/* location details */}
        <hr/>
        <Row>
          <Col>
            <h3>Detalii geografice despre {location.name} </h3>
            <p>Coordonate geografice: <WeatherStatPair pkey='latitudine' value={location.latitude} />; <WeatherStatPair pkey='longitudine' value={location.longitude} /></p>
            <a href={`http://www.google.com/maps/place/${location.latitude},${location.longitude}`} target="_blank">
              Arata {location.name} in Google Maps.
            </a>
            <p>Localitatea {location.name} face parte din judetul {location.account_county.name} din regiunea {location.region} a Romaniei</p>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col xs={12}>
            <h3>
              <Link href={`/vremea/${formatForURL(location.account_county.name)}`}>
                <a>
                Prognoza meteo in celelalte localitati din judetul {location.account_county.name}
                </a>
              </Link>
            </h3>
            {/* <ListCities cities={locationsByCounty}/> */}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: ALL_LOCATIONS_QUERY
  });
  const { counties } = data;
  let paths = [];
  counties.forEach(county => {
    paths = paths.concat(county.account_city.map(location => ({
        params: {
          slug: `${formatForURL(location.name)}-${formatForURL(county.name)}`,
          locationId: `${location.id}`
        }
      })));
  });

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const locationId = parseInt(params.locationId);
  // const countyName = params.slug.split('-')[1];
  const apolloClient = initializeApollo();
  const queryVars = {
    locationId,
    // countyName,
    orderBy: {
      "name": "asc"
    }
  }

  await apolloClient.query({
    query: LOCATION_QUERY,
    variables: queryVars
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      locationQueryVars: queryVars,
    },
    revalidate: 1,
  }
}