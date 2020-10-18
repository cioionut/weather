import { gql, useQuery, from } from '@apollo/client'
import { initializeApollo } from '../../../lib/apolloClient'
import Layout from '../../../components/layout'
import { removeDiacritics, replaceSpace } from '../../../lib/strUtils';
import { fetcher } from '../../../lib/fetchUtils';
import useSWR from 'swr';
import { Container, Row, Col } from 'react-bootstrap';


export const LOCATION_QUERY = gql`
  query location($locationId: Int!) {
    location(locationId: $locationId) {
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



export default function LocationCountyy({ locationQueryVars }) {

  const { data: gqlData } = useQuery(
    LOCATION_QUERY,
    {
      variables: locationQueryVars
    }
  );
  let { location } = gqlData;
  const { data: weatherData, error } = useSWR(
    `/api/weather?lat=${location.latitude}&lon=${location.longitude}&lang=ro`, fetcher);
  console.log(weatherData, error);

  if (error) return <div>failed to load</div>;
  if (!weatherData) return <div>loading...</div>;
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            Vant: {weatherData.current.wind_speed} kph
          </Col>
          <Col>
            Umiditate: {weatherData.current.humidity}%
          </Col>
          <Col>
            Pct. Condensare: {weatherData.current.dew_point}
          </Col>
          <Col>
            Index UV: {weatherData.current.uvi}
          </Col>
          <Col>
            Vizibilitate: {Math.floor(weatherData.current.visibility / 1000)} +km
          </Col>
          <Col>
            Presiune: {weatherData.current.pressure} hPa
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <h1>{location.name}, {location.account_county.name}</h1>
        </Row>
        <Row className="justify-content-center">
          <Col md="auto">
            <img src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}></img>
          </Col>
          <Col md="auto">
            <h2>{Math.floor(weatherData.current.temp)}{String.fromCharCode(176)}</h2>
          </Col>
        </Row>

        <Row>
          <a href={`http://www.google.com/maps/place/${location.latitude},${location.longitude}`} target="_blank">
            View on Maps - lat: {location.latitude}, lon: {location.longitude}
          </a>
        </Row>
        <Row>
          <p>Judet: {location.account_county.name}, Regiune a tarii: {location.region}</p>
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
          slug: `localitatea-${replaceSpace(removeDiacritics(location.name))}-judetul-${replaceSpace(removeDiacritics(county.name))}`,
          locationId: `${location.id}`
        }
      })));
  });

  // console.log(paths);
  // console.log(paths.filter(path => path.params.locationId == "32"))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const locationId = parseInt(params.locationId);
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: LOCATION_QUERY,
    variables: {
      locationId
    }
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      locationQueryVars: {
        locationId
      }
    },
    revalidate: 1,
  }
}