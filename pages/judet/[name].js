import { gql, useQuery, NetworkStatus } from '@apollo/client'
import { initializeApollo } from '../../lib/apolloClient'
import Link from 'next/link'
import Layout from '../../components/layout'
import { formatForURL } from '../../lib/strUtils';
import { Container, Row } from 'react-bootstrap';


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
    }
  }
`;


export default function County({ countyQueryVars }) {

  const { data } = useQuery(
    COUNTY_QUERY,
    {
      variables: countyQueryVars
    }
  )
  let { locationsByCounty } = data;
  let countyName = countyQueryVars.countyName;
  if (locationsByCounty && locationsByCounty.length > 0)
    countyName = locationsByCounty[0].account_county.name;
  return (
    <Layout>
      <Container>
        <Row className="justify-content-center">
          <h3>Localitatile din judetul {countyName}</h3>
        </Row>
        <Row className="justify-content-center">
          <ul>
            {locationsByCounty.map(location => (
              <li key={location.id}>
                <Link href="/vremea/[slug]/[locationId]"
                  as={`/vremea/localitatea-${formatForURL(location.name)}-judetul-${formatForURL(location.account_county.name)}/${location.id}`}>
                    <a>{location.name}</a>
                </Link>
              </li>
            ))}
          </ul>
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
        name: formatForURL(county.name)
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const countyName = params.name;
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
    },
    revalidate: 1,
  }
}