import Link from 'next/link'
import { Row, Col, Container, ListGroup } from 'react-bootstrap';
import { formatForURL } from '../lib/strUtils';
import cities from '../data/mmajor_ro_cities'


export default function ListCities(props) {
  let citiesIn = cities.map((location, index) => {
    return (
      <Row key={index}>
        <Link href="/vremea/[slug]/[locationId]"
          as={`/vremea/localitatea-${formatForURL(location.name)}-judetul-${formatForURL(location.account_county.name)}/${location.id}`}>
            <a>{location.name}</a>
        </Link>
      </Row>
    )
  })
  return (
    <Container>
      <Row>
        Meteo in Romania
      </Row>
      {citiesIn}
    </Container>
  )
}