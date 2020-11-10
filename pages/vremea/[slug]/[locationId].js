import Head from 'next/head'
import { gql, useQuery } from '@apollo/client'
import { initializeApollo } from '../../../lib/apolloClient'
import { formatForURL } from '../../../lib/strUtils';
import { fetcher } from '../../../lib/fetchUtils';
import useSWR from 'swr';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

import Layout from '../../../components/layout';
import CurrentWeather from '../../../components/currentweather'
import DailyWeather from '../../../components/dailyweather'
import WeatherStatPair from '../../../components/weatherstatpair'
import ListCities from '../../../components/listCities'
import Link from 'next/link';


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
// $countyName: String!, $orderBy: account_cityOrderBy
// locationsByCounty(countyName: $countyName, orderBy: $orderBy) {
//   id
//   name
//   account_county {
//     id
//     name
//   }
// }

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



export default function LocationCounty({ locationQueryVars }) {

  const { data: gqlData } = useQuery(
    LOCATION_QUERY,
    {
      variables: locationQueryVars
    }
  );
  let { location, locationsByCounty } = gqlData;

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
  const { data: weatherData, error } = useSWR(url, fetcher);

  // const { data: weatherData, error } = useSWR(
  //   `/api/weather?lat=${location.latitude}&lon=${location.longitude}&lang=ro`, fetcher);
  
  
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
        <Row className="mt-2">
          <Col>
            <h1>Vezi cum va fi vremea in {location.name}, judetul {location.account_county.name}</h1>
          </Col>          
        </Row>
        {(weatherData && !error)
          ?
          <>
            <hr/>
            <Row>
              <CurrentWeather weatherData={weatherData}/>
            </Row>
            <hr/>
            <Row>
              <DailyWeather daily={weatherData.daily} />
            </Row>
          </>
          : 
          <Row className="justify-content-center">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </Row>
        }
        {/* location details */}
        <hr/>
        <Row>
        <Col>
            <p>Coordonate geografice: <WeatherStatPair pkey='latitudine' value={location.latitude} />; <WeatherStatPair pkey='longitudine' value={location.longitude} /></p>
            <p><WeatherStatPair pkey='Siruta' value={location.siruta} /></p>
            <a href={`http://www.google.com/maps/place/${location.latitude},${location.longitude}`} target="_blank">
              Arata {location.name} in Google Maps.
            </a>
            <p>Localitatea {location.name} face parte din judetul {location.account_county.name} din regiunea {location.region} a Romaniei</p>
            <p>Vezi prognoza meteo pentru celelalte localitati din judetul <Link href={`/vremea/${formatForURL(location.account_county.name)}`}>{location.account_county.name}</Link>.</p>          
          </Col>
        </Row>
        {/* <hr/>
        <Row>
          <Col xs={12}>
            <h3>Prognoza meteo in celelalte localitati din judetul {location.account_county.name}</h3>
            <ListCities cities={locationsByCounty}/>
          </Col>
        </Row> */}
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
      locationQueryVars: queryVars
    },
    revalidate: 1,
  }
}