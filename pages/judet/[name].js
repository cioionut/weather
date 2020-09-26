import { gql, useQuery, NetworkStatus } from '@apollo/client'
import { initializeApollo } from '../../lib/apolloClient'
import Link from 'next/link'
import Layout from '../../components/layout'
import { removeDiacritics, replaceSpace } from '../../lib/strUtils';

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
  let { locationsByCounty } = data 
  return (
    <Layout>
        <p>Lista de locatii din judetul {countyQueryVars.countyName}</p>
        <ul>
          {locationsByCounty.map(location => (
            <li key={location.id}>
              <Link href="/vremea/[slug]/[locationId]"
                as={`/vremea/localitatea-${replaceSpace(removeDiacritics(location.name))}-judetul-${replaceSpace(removeDiacritics(location.account_county.name))}/${location.id}`}>
                  <a>{location.name}</a>
              </Link>
            </li>
          ))}
        </ul>
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
        name: replaceSpace(removeDiacritics(county.name))
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