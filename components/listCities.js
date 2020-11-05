import Link from 'next/link'
import { Row, Col, Container } from 'react-bootstrap';
import { formatForURL } from '../lib/strUtils';
import styles from '../styles/global.module.css';


export default function ListCities(props) {
  let citiesIn = props.cities.map((location, index) => {
    return (
      <Col key={index} className="mx-sm-auto">
        <Link href="/vremea/[slug]/[locationId]"
          as={`/vremea/localitatea-${formatForURL(location.name)}-judetul-${formatForURL(location.account_county.name)}/${location.id}`}>
            <a>{location.name}</a>
        </Link>
      </Col>
    )
  })
  return (
    <Container fluid>
      <Row className={`flex-nowrap flex-sm-wrap ${styles.mobileRow}`}>
        <Col>
          Meteo in Romania
        </Col>
        {citiesIn}
      </Row>
    </Container>
  )
}