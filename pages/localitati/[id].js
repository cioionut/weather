import Layout from '../../components/layout'
import { getAllLocationIds, getLocationData } from '../../lib/locations'


export default function Location({ locationData }) {
  return (
    <Layout>
        {locationData.id}
        <br />
        {locationData.name}
        <br />
        lat: {locationData.lat}, lon: {locationData.lon}
        <br />
        Judet: {locationData.county}, Regiune a tarii: {locationData.region}
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllLocationIds()
  return {
      paths,
      fallback: false
  }
}

export async function getStaticProps({ params }) {
    const locationData = await getLocationData(params.id)
    return {
      props: {
        locationData
      }
    }
}