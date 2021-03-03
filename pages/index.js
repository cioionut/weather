import Head from 'next/head';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { gql, useQuery } from '@apollo/client';

import useSWR from 'swr';

import { MdLocationOn, MdLocationOff } from "react-icons/md";

// local
// libs
import { fetcher } from '../lib/fetchUtils';
import { initializeApollo } from '../lib/apolloClient';

// components
import Layout, { siteTitle } from '../components/layout';
import CurrentWeather from '../components/currentweather';
import Daily3hWeather from '../components/daily3hweather';
import ListCities from '../components/listCities';
import ListCounties from '../components/listCounties';
import WeatherStatPair from '../components/weatherstatpair';
import MainAdBanner from '../../../components/main_ad_banner';

// data
import roMajorCities from '../data/mmajor_ro_cities';
import initWData from '../data/init_fday5_weather';

// graphQL
export const ALL_COUNTIES_QUERY = gql`
  query counties($orderBy: account_countyOrderBy){
    counties(orderBy: $orderBy) {
      id
      name
    }
  }
`;


export default function Home({ allCountiesQueryVars, roMajorCities }) {
  
  // get counties data
  const { data: gqlData } = useQuery(
    ALL_COUNTIES_QUERY,
    {
      variables: allCountiesQueryVars
    }
  );
  let { counties } = gqlData;
  let locationIcon = <MdLocationOn/>;
  let location;

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
  } else {
    // set default location to Bucharest
    location = roMajorCities.filter((location) => location.id == 2715)[0]; // Bucuresti default
    locationIcon = <MdLocationOff/>
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

  const title = `Vremea în România, 15 zile de prognoză meteo precisă`;

  // render
  return (
    <Layout home>
      <Head>
        <title>{title}</title>
        <meta property="og:site_name" content={title}></meta>
        <meta property="og:title" content={`${title}`}></meta>
        <meta property="og:url" content="https://vremea.ionkom.com/"></meta>
        <meta
            name="description"
            content="Vremea în România. Vezi prognoza meteo detaliata pentru luna curenta, Starea vremii prezintă temperatura, precipitațiile, vântul si umiditatea pentru 15 zile. Vezi vremea pe ore sau zile în localitățile din România."
        />
      </Head>
      <Container>
        {/* site title */}
        <Row className="mt-2">
          <Col>
            {location
              ? <h1 className="text-center">Vremea în {location.name}, județul {location.account_county.name}</h1>
              : <h1 className="text-center">Vremea</h1>
            }
            {/* <p>Orice plan tine cont si de vremea de afara. Ia cele mai bune decizii de vacanta urmarind buletinul meteo curent sau prognoza vremii pentru 15 zile. La <Link href='/vremea/mamaia-constanta/10850'>mare</Link>? La <Link href='/vremea/poiana-brasov-brasov/2714'>munte</Link>? Tu decizi [mai putin vremea hahaha].</p> */}
          </Col>          
        </Row>
        {/* vremea curenta */}
        <Row className="mt-5">
          <CurrentWeather weatherData={weatherData.list && weatherData.list[0]}/>
        </Row>
        <Row>
          <Col className="text-right" style={{ fontWeight: '350' }}>
            <p>{locationIcon} Meteo folosind locația dispozitivului tău</p>
          </Col>
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
        {
          location &&
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
        }

        {/* other locations links */}
        <hr/>
        <Row>
          <Col xs={12}>
            <h3>Cum se prezinta vremea in marile orase ale Romaniei</h3>
            <ListCities cities={roMajorCities}/>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col xs={12}>
            <h3>Prognoza meteo pe judete</h3>
            <ListCounties counties={counties}/>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const queryVars = {
    orderBy: {
      "name": "asc"
    }
  }

  await apolloClient.query({
    query: ALL_COUNTIES_QUERY,
    variables: queryVars
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      allCountiesQueryVars: queryVars,
      roMajorCities,
    },
    revalidate: 1,
  }
}