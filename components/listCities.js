import Link from 'next/link'
import { Row, Col, Container } from 'react-bootstrap';
import { formatForURL } from '../lib/strUtils';
import styles from '../styles/mobile.module.css';


export default function ListCities(props) {
  let citiesIn = props.cities.map((location, index) => {
    return (
      <Col md={3} ms="auto" xs="auto" key={index}>
        <Link href={`/vremea/${formatForURL(location.name)}-${formatForURL(location.account_county.name)}/${location.id}`}>
          {location.name}
        </Link>
      </Col>
    )
  })
  return (
    <Container fluid>
      <Row className={`flex-nowrap flex-sm-wrap ${styles.mobileRow}`}>
        {citiesIn}
      </Row>
    </Container>
  )
}