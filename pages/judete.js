import { gql, useQuery, NetworkStatus } from '@apollo/client'
import { initializeApollo } from '../lib/apolloClient'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'


export const ALL_COUNTIES_QUERY = gql`
    {
        counties {
          id
          name
          code
        }
    }
`;

export default function Counties() {

  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_COUNTIES_QUERY,
  )

  let { counties } = data

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
        <p>Lista judetelor</p>
        <ul>
          {counties.map(({ id, name, code }) => (
            <li key={id}>
              <Link href="/judet/[name]" as={`/judet/${name}`}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ALL_COUNTIES_QUERY,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  }
}