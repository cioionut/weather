import Head from 'next/head';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { gql, useQuery } from '@apollo/client';

import useSWR from 'swr';


// local
// libs
import { fetcher } from '../lib/fetchUtils';
import { initializeApollo } from '../lib/apolloClient';

// components
import Layout, { siteTitle } from '../components/layout';
import CurrentWeather from '../components/currentweather';
import Daily3hWeather from '../components/daily3hweather';
import HourlyWeather from '../components/3hourlyweather';
import ListCities from '../components/listCities';
import ListCounties from '../components/listCounties';
import WeatherStatPair from '../components/weatherstatpair';
import MainAdBanner, { HeadCardAd } from '../components/main_ad_banner';
import FooterAdBanner from '../components/footer_ad_banner';
import SideBarAd, { SideBarCardAd } from '../components/sidebar_ad';


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
  let locDetect = false;

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
    locDetect = true;
  } else {
    // set default location to Bucharest
    location = roMajorCities.filter((location) => location.id == 2715)[0]; // Bucuresti default
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

  // set titles
  const pageTitle = `Vremea în România, 15 zile de prognoză meteo precisă`;
  const buttons = [
    <Button key="1" style={{borderRadius: 16, fontWeight: 450}} size="sm" href="#forecast-next-days">Vezi vremea pe zile</Button>
  ]

  // render
  return (
    <Layout home>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:site_name" content={pageTitle}></meta>
        <meta property="og:title" content={`${pageTitle}`}></meta>
        <meta property="og:url" content="https://vremea.ionkom.com/"></meta>
        <meta
            name="description"
            content="Vremea în România. Vezi prognoza meteo detaliata pentru luna curenta, Starea vremii prezintă temperatura, precipitațiile, vântul si umiditatea pentru 15 zile. Vezi vremea pe ore sau zile în localitățile din România."
        />
      </Head>
      <Container>
        {/* current weather */}
        <Row className="mt-1">
          <Col>
            <CurrentWeather weatherData={weatherData.list && weatherData.list[0]} location={location} locDetect={locDetect} buttons={buttons} />
          </Col>
        </Row>
        {/* main ad banner */}
        <Row>
          <Col md={12}>
            <MainAdBanner />
          </Col>
        </Row>
        {/* hourly weather */}
        <Row className="mt-1">
          <Col>
            <HourlyWeather daily={weatherData.list} location={location} />
          </Col>
          <Col md={4}>
            <SideBarAd />
          </Col>
        </Row>
        {/* daily weather */}
        <Row className="mt-1" id='forecast-next-days'>
          <Col>
            <Daily3hWeather daily={weatherData.list} />
          </Col>
        </Row>
        {/* next 15 days */}
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
              <h3>Despre {location.name} </h3>
              <p>Localitatea {location.name} face parte din judetul {location.account_county.name} din regiunea {location.region} a Romaniei</p>
              <p>Coordonate geografice: <WeatherStatPair pkey='latitudine' value={location.latitude} />; <WeatherStatPair pkey='longitudine' value={location.longitude} /></p>
              <a href={`http://www.google.com/maps/place/${location.latitude},${location.longitude}`} target="_blank">
                Arata {location.name} in Google Maps.
              </a>
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