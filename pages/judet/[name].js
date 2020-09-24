import { gql, useQuery, NetworkStatus } from '@apollo/client'
import { initializeApollo } from '../../lib/apolloClient'
import Link from 'next/link'
import Layout from '../../components/layout'

export const ALL_COUNTY_NAMES_QUERY = gql`
    {
        counties {
          id
          name
        }
    }
`;
export const COUNTY_QUERY = gql`
    query county($countyName: String!) {
        county(countyName: $countyName) {
          id
          name
          code
        }
        locationsByCounty(countyName: $countyName) {
          id
          county_id
          name
          account_county {
            name
          }
        }
    }
`;


export default function County({ countyQueryVars }) {

  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    COUNTY_QUERY,
    {
      variables: countyQueryVars
    }
  )
  let { county, locationsByCounty } = data 
  return (
    <Layout>
        {county.id}
        <br />
        <p>Lista de locatii din judetul {county.name}</p>
        <ul>
          {locationsByCounty.map(({ id, county_id, name, account_county }) => (
            <li key={id}>
              <Link href="/vremea/[slug]/[locationId]" as={`/vremea/s/${id}`}>
              {/* as={`/vremea/localitatea-${name}-judetul-${account_county.name}/${id}`} */}
                <a>{name} - {county_id}</a>
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
        name: county.name
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const countyName = params.name;
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: COUNTY_QUERY,
    variables: {
      countyName: countyName
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      countyQueryVars: {
        countyName: countyName
      }
    },
    revalidate: 1,
  }
}