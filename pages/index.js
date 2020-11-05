import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { gql, useQuery } from '@apollo/client'
import { initializeApollo } from '../lib/apolloClient'
import useSWR from 'swr';
import { fetcher } from '../lib/fetchUtils';

import Layout, { siteTitle } from '../components/layout'
import CurrentWeather from '../components/currentweather'
import DailyWeather from '../components/dailyweather'
import ListCities from '../components/listCities'
import roMajorCities from '../data/mmajor_ro_cities'


export const LOCATIONSBYIDS_QUERY = gql`
  query locationsByIds($ids: [Int!]!, $orderBy: account_cityOrderBy) {
    locationsByIds(ids: $ids, orderBy: $orderBy) {
      id
      county_id
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


export default function Home({ locationQueryVars, roMajorCities }) {
  const { data: gqlData } = useQuery(
    LOCATIONSBYIDS_QUERY,
    {
      variables: locationQueryVars
    }
  );
  let { locationsByIds } = gqlData;
  const location = roMajorCities.filter((location) => location.id == 2715)[0]; // Bucuresti default

  // // get weather
  // const openweatherApiUrl = process.env.NEXT_PUBLIC_OPENWEATHER_API_URL;
  // const openweatherApiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  // let url = new URL(`${openweatherApiUrl}/onecall`);
  // let queryParams = {
  //   lat: location.latitude, 
  //   lon: location.longitude, 
  //   lang: 'ro',
  //   appid: openweatherApiKey,
  //   units: 'metric',
  //   exclude: 'minutely'
  // };
  // Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]))
  // const { data: weatherData, error } = useSWR(url, fetcher);

  const { data: weatherData, error } = useSWR(
    `/api/weather?lat=${location.latitude}&lon=${location.longitude}&lang=ro`, fetcher);
  
  // // debug logs
  // console.log(weatherData, error);

  if (error) return <div>failed to load</div>;
  if (!weatherData) return <div>loading...</div>;

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta property="og:site_name" content={siteTitle}></meta>
        <meta property="og:title" content={`${siteTitle}`}></meta>
        <meta property="og:url" content="https://vremea.ionkom.com/"></meta>
        <meta
            name="description"
            content="Afla cum va fi vremea in localitatea ta"
        />
      </Head>
      <Container fluid>
        <Row>
          <Col xs={12} md={1}>
            Meteo in Romania
            <ListCities cities={roMajorCities}/>
          </Col>
          <Col>
            <Row>
              <Col className="text-center mt-4 mb-3">
                <h2>{location.name}, {location.account_county.name}</h2>
              </Col>
            </Row>
            <CurrentWeather weatherData={weatherData}/>
            <DailyWeather daily={weatherData.daily} />
            <Row>
              <a href={`http://www.google.com/maps/place/${location.latitude},${location.longitude}`} target="_blank">
                View on Maps - lat: {location.latitude}, lon: {location.longitude}
              </a>
            </Row>
            <Row>
              <p>Judet: {location.account_county.name}, Regiune a tarii: {location.region}</p>
            </Row>
              </Col>
            </Row>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const locationsIds = roMajorCities.map(city => city.id);
  const apolloClient = initializeApollo();
  const queryVars = {
    ids: locationsIds,
    orderBy: {
      "name": "asc"
    }
  }

  await apolloClient.query({
    query: LOCATIONSBYIDS_QUERY,
    variables: queryVars
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      locationQueryVars: queryVars,
      roMajorCities
    },
    revalidate: 1,
  }
}