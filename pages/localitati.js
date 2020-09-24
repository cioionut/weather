import { gql, useQuery, NetworkStatus } from '@apollo/client'
import { initializeApollo } from '../lib/apolloClient'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'


export const ALL_LOCATIONS_QUERY = gql`
  query locations($skip: Int!, $take: Int!) {
    locations(skip: $skip, take: $take) {
      id
      name
      account_county {
        name
      }
    }
    _locationsMeta {
      count
    }
  }
`;

export const locationsQueryVars = {
  skip: 0,
  take: 10
}

export default function Locations() {

  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_LOCATIONS_QUERY,
    {
      variables: locationsQueryVars,
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true,
    }
  )

  const loadingMoreLocations = networkStatus === NetworkStatus.fetchMore

  const loadMoreLocations = () => {
    fetchMore({
      variables: {
        skip: locations.length,
      },
    })
  }
  if (error) return <div>Error</div>  // <ErrorMessage message="Error loading posts." />
  if (loading && !loadingMoreLocations) return <div>Loading</div>

  let { locations, _locationsMeta } = data
  const areMoreLocations = locations.length < _locationsMeta.count

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <meta property="og:site_name" content={siteTitle}></meta>
        <meta property="og:title" content={`${siteTitle}`}></meta>
        <meta property="og:url" content="https://vremea.ionkom.com/"></meta>
        <meta
            name="description"
            content="Lista locatii"
        />
      </Head>
      <section>
        <p>Lista de locatii</p>
        <ul>
          {locations.map(({ id, name, account_county }) => (
            <li key={id}>
              <Link href="/vremea/[slug]/[locationId]" as={`/vremea/localitatea-${name}-judetul-${account_county.name}/${id}`}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
        {areMoreLocations && (
        <button onClick={() => loadMoreLocations()} disabled={loadingMoreLocations}>
          {loadingMoreLocations ? 'Loading...' : 'Show More'}
        </button>
        )}
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ALL_LOCATIONS_QUERY,
    variables: locationsQueryVars,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  }
}