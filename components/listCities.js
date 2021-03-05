import Link from 'next/link'
import { Row, Col, Container } from 'react-bootstrap';
import { formatForURL } from '../lib/strUtils';

export default function ListCities(props) {
  let citiesIn = props.cities.map((location, index) => {
    return (
      <Col md={3} xs={4} key={index}>
        <Link href={`/vremea/${formatForURL(location.name)}-${formatForURL(location.account_county.name)}/${location.id}`}>
          {location.name}
        </Link>
      </Col>
    )
  })
  return (
    <Container fluid>
      <Row>
        {citiesIn}
      </Row>
    </Container>
  )
}