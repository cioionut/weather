import Head from 'next/head'
import Link from 'next/link';
import useSWR from 'swr';
import { gql, useQuery } from '@apollo/client'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';

import { initializeApollo } from '../../../lib/apolloClient'
import { formatForURL } from '../../../lib/strUtils';
import { fetcher } from '../../../lib/fetchUtils';

import Layout from '../../../components/layout';
import CurrentWeather from '../../../components/currentweather'
import DailyWeather from '../../../components/dailyweather'
import WeatherStatPair from '../../../components/weatherstatpair'
import ListCities from '../../../components/listCities'

import weatherDataInit from '../../../data/weather_data_init'


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
  let { location, locationsByCounty } = gqlData;
  const [weatherData, setWeatherData] = useState(weatherDataInit);
  const [shouldGetWeather, setShouldGetWeather] = useState(true);

  // get weather
  const openweatherApiUrl = process.env.NEXT_PUBLIC_OPENWEATHER_API_URL;
  const openweatherApiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  let url = new URL(`${openweatherApiUrl}/onecall`);
  let queryParams = {
    lat: location.latitude, 
    lon: location.longitude, 
    lang: 'ro',
    appid: openweatherApiKey,
    units: 'metric',
    exclude: 'minutely'
  };
  Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]))
  const { data, error } = useSWR(
    () => shouldGetWeather ? url : null, fetcher);
  // // get weather from nextjs api routes
  // const { data, error } = useSWR(
  //   () => shouldGetWeather ? `/api/weather?lat=${location.latitude}&lon=${location.longitude}&lang=ro` : null,
  //   fetcher);
  if (data && !error) {
    setWeatherData(data);
    setShouldGetWeather(false);
  }
  // useTimeout(() => setShouldGetWeather(true), 3000);
  
  
  const title = `Vremea in ${location.name}, judetul ${location.account_county.name}`
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
            content={`Prognoza meteo pentru ${location.name} din judetul ${location.account_county.name}. Vremea pentru urmatoarele zile dar si un buletin meteo curent al localitatii`}
        />
      </Head>
      <Container>
        {/* site title */}
        <Row className="mt-2">
          <Col>
            <h1 className="text-center">Vremea in {location.name}, judetul {location.account_county.name}</h1>
            {/* <p>Orice plan tine cont si de vremea de afara. Ia cele mai bune decizii de vacanta urmarind buletinul meteo curent sau prognoza vremii pentru 15 zile. La <Link href='/vremea/mamaia-constanta/10850'>mare</Link>? La <Link href='/vremea/poiana-brasov-brasov/2714'>munte</Link>? Tu decizi [mai putin vremea hahaha].</p> */}
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
          <CurrentWeather weatherData={weatherData}/>
        </Row>
        {/* vremea pe zile */}
        <Row>
          <Col>
            <h3>Vremea in urmatoarele 7 zile</h3>
          </Col> 
        </Row>
        <hr style={{marginTop: 0}}/>
        <Row>
          <DailyWeather daily={weatherData.daily} />
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
  const countyName = params.slug.split('-')[1];
  const apolloClient = initializeApollo();
  const queryVars = {
    locationId,
    countyName,
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
      weatherDataInit
    },
    revalidate: 1,
  }
}