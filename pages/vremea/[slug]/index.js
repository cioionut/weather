import { useState } from 'react';

import useSWR from 'swr';
import Head from 'next/head';

import { Container, Row, Col, Button } from 'react-bootstrap';

import { gql, useQuery } from '@apollo/client'
import { initializeApollo } from '../../../lib/apolloClient'

import Layout from '../../../components/layout'
import ListCities from '../../../components/listCities';
import CurrentWeather from '../../../components/currentweather'
import DailyWeather from '../../../components/dailyweather'
import { formatForURL } from '../../../lib/strUtils';
import { fetcher } from '../../../lib/fetchUtils';

import weatherDataInit from '../../../data/weather_data_init';


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


export default function County({ countyQueryVars, weatherDataInit }) {

  let location;
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
  }
  
  // geolocation
  const geoIpAPIUrlStr = process.env.NEXT_PUBLIC_FREEGEOIP_API;
  let geoIpAPIUrl = new URL(`${geoIpAPIUrlStr}/json/`);
  const { data: geoIpData, error: geoIpErr } = useSWR(geoIpAPIUrl, fetcher);

  if (geoIpData && !geoIpErr) {
    // set location var
    location = {
      name: geoIpData.city,
      account_county: { name: geoIpData.region_name },
      latitude: geoIpData.latitude,
      longitude: geoIpData.longitude
    }
  }
  
  // weather variables
  const [weatherData, setWeatherData] = useState(weatherDataInit);
  const [shouldGetWeather, setShouldGetWeather] = useState(true);
  // get weather
  const openweatherApiUrl = process.env.NEXT_PUBLIC_OPENWEATHER_API_URL;
  const openweatherApiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  let url = new URL(`${openweatherApiUrl}/onecall`);
  let queryParams = {
    lat: location ? location.latitude : 0, 
    lon: location ? location.longitude : 0, 
    lang: 'ro',
    appid: openweatherApiKey,
    units: 'metric',
    exclude: 'minutely'
  };
  Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]))
  const { data, error } = useSWR(
    () => location && shouldGetWeather ? url : null, fetcher);

  if (data && !error) {
    setWeatherData(data);
    setShouldGetWeather(false);
  }
  
  const title = `Vremea în ${countyName}, ${region}, Prognoza Meteo pe 15 zile`;
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
        <Row className="justify-content-center">
          <h1 className="text-center">Vremea în {location && location.name}, județul {location ? location.account_county.name : countyName}</h1>
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
        <hr/>
        <Row>
          <Col xs={12}>
            <h3>Vezi cum va fi vremea în următoarele zile în județul {countyName}, {region}</h3>
            <ListCities cities={locationsByCounty}/>
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
  const countyName = params.slug;
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
      countyQueryVars,
      weatherDataInit
    },
    revalidate: 1,
  }
}