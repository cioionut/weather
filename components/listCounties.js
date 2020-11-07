import Link from 'next/link'
import { Row, Col, Container } from 'react-bootstrap';
import { formatForURL } from '../lib/strUtils';
import styles from '../styles/mobile.module.css';


export default function ListCounties(props) {
  let counties = props.counties.map((county, index) => {
    return (
      <Col md={3} ms="auto" xs="auto" key={index}>
        <Link href={`/vremea/${formatForURL(county.name)}`}>
          {county.name}
        </Link>
      </Col>
    )
  })
  return (
    <Container fluid>
      <Row className={`flex-nowrap flex-sm-wrap ${styles.mobileRow}`}>
        {counties}
      </Row>
    </Container>
  )
}