import { gql, useQuery } from '@apollo/client'
import { initializeApollo } from '../../../lib/apolloClient'
import Layout from '../../../components/layout'
import { removeDiacritics, replaceSpace } from '../../../lib/strUtils';


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