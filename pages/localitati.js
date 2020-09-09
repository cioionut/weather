import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import { getLocationsData } from '../lib/locations'

export default function Locations({ allLocationsData }) {
  console.log(allLocationsData)
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
          {allLocationsData.map(({ id, lat, lon, name, county, region }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allLocationsData = await getLocationsData()
  return {
    props: {
      allLocationsData
    }
  }
}