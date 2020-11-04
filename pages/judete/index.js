import { gql, useQuery, NetworkStatus } from '@apollo/client'
import { initializeApollo } from '../../lib/apolloClient'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../../components/layout'
import { formatForURL } from '../../lib/strUtils';
import { Container, Row } from 'react-bootstrap';


export const ALL_COUNTIES_QUERY = gql`
  query counties($orderBy: account_countyOrderBy){
    counties(orderBy: $orderBy) {
      id
      name
    }
  }
`;

export default function Counties({ allCountiesQueryVars }) {

  const { data } = useQuery(
    ALL_COUNTIES_QUERY,
    {
      variables: allCountiesQueryVars
    }
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
      <Container>
        <Row className="justify-content-center">
          <h3>Judetele din Romania</h3>
        </Row>
        <Row className="justify-content-center">
          <ul>
              {counties.map(({ id, name }) => (
                <li key={id}>
                  <Link href="/judet/[name]" as={`/judet/${formatForURL(name)}`}>
                    <a>{name}</a>
                  </Link>
                </li>
              ))}
            </ul>
        </Row>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const allCountiesQueryVars = {
    orderBy: {
      "name": "asc"
    }
  }

  await apolloClient.query({
    query: ALL_COUNTIES_QUERY,
    variables: allCountiesQueryVars
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      allCountiesQueryVars
    },
    revalidate: 1,
  }
}