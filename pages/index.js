import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { gql, useQuery } from '@apollo/client'
import { initializeApollo } from '../lib/apolloClient'
import { useState } from 'react';
import useTimeout from 'use-timeout'

import useSWR from 'swr';
import { fetcher } from '../lib/fetchUtils';
import { formatForURL } from '../lib/strUtils';

import Layout, { siteTitle } from '../components/layout'
import CurrentWeather from '../components/currentweather'
import DailyWeather from '../components/dailyweather'
import ListCities from '../components/listCities'
import ListCounties from '../components/listCounties'
import WeatherStatPair from '../components/weatherstatpair'

import roMajorCities from '../data/mmajor_ro_cities'
import weatherDataInit from '../data/weather_data_init'


export const ALL_COUNTIES_QUERY = gql`
  query counties($orderBy: account_countyOrderBy){
    counties(orderBy: $orderBy) {
      id
      name
    }
  }
`;


export default function Home({ allCountiesQueryVars, roMajorCities, weatherDataInit }) {
  const { data: gqlData } = useQuery(
    ALL_COUNTIES_QUERY,
    {
      variables: allCountiesQueryVars
    }
  );
  let { counties } = gqlData;
  const location = roMajorCities.filter((location) => location.id == 2715)[0]; // Bucuresti default

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


  const title = `Vremea in Romania - Prognoza meteo pe 10 zile`
  return (
    <Layout home>
      <Head>
        <title>{title}</title>
        <meta property="og:site_name" content={title}></meta>
        <meta property="og:title" content={`${title}`}></meta>
        <meta property="og:url" content="https://vremea.ionkom.com/"></meta>
        <meta
            name="description"
            content="Vremea pentru 7 zile in Bucuresti, Romania. Vezi prognoza meteo detaliata pentru luna curenta, vei sti intotdeauna ce planuri de vacanta sa iti faci."
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
            <h2>Acum in capitala</h2>
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
      weatherDataInit
    },
    revalidate: 1,
  }
}