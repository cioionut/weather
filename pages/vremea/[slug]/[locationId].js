import { gql, useQuery, NetworkStatus } from '@apollo/client'
import { initializeApollo } from '../../../lib/apolloClient'
import Layout from '../../../components/layout'


export const LOCATION_QUERY = gql`
  query location($locationId: Int!) {
    location(cityId: $locationId) {
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
  query locations($skip: Int, $take: Int) {
    locations(skip: $skip, take: $take) {
      id
      
    }
  }
`;

// name
      // county_id
      // account_county {
      //   id
      //   name
      //   code
      // }

export default function LocationCounty({ locationQueryVars }) {

  const { data } = useQuery(
    LOCATION_QUERY,
    {
      variables: locationQueryVars
    }
  )
  let { location } = data
  return (
    <Layout>
        {location.id}
        <br />
        {location.name}
        <br />
        lat: {location.latitude}, lon: {location.longitude}
        <br />
        Judet: {location.account_county.name}, Regiune a tarii: {location.region}
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: ALL_LOCATIONS_QUERY
  })
  let { locations } = data;

  return {
    paths: locations.map(location => ({
      params: {
        // slug: `localitatea-${location.name}-judetul-${location.account_county.name}`,
        slug: `s`,
        locationId: `${location.id}`
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const locationId = parseInt(params.locationId);
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: LOCATION_QUERY,
    variables: {
        locationId
    }
  })

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