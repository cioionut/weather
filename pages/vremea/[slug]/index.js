import Head from 'next/head'
import { gql, useQuery } from '@apollo/client'
import { initializeApollo } from '../../../lib/apolloClient'
import Link from 'next/link'
import Layout from '../../../components/layout'
import { formatForURL } from '../../../lib/strUtils';
import { Container, Row, Col } from 'react-bootstrap';
import ListCities from '../../../components/listCities'


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
  
  const title = `Vremea in ${countyName}, prognoza meteo pe 15 zile`;
  // render
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta property="og:site_name" content={title}></meta>
        <meta property="og:title" content={`${title}`}></meta>
        <meta property="og:url" content="https://vremea.ionkom.com/"></meta>
        <meta
            name="description"
            content={`Prognoza meteo pentru judetul ${countyName}. Vremea pentru urmatoarele zile dar si un buletin meteo curent al localitatilor din judet`}
        />
      </Head>
      <Container>
        <Row className="justify-content-center">
          <h1>Vezi cum va fi vremea in urmatoarele saptamani in judetul {countyName}</h1>
        </Row>
        <Row>
          <Col xs={12}>
            <h3>Prognoza meteo pentru localitatile din judetul {countyName} </h3>
            <ListCities cities={locationsByCounty}/>
          </Col>
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
        slug: formatForURL(county.name)
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const countyName = params.slug;
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