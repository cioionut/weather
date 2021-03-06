import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Container, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import CookieConsent from "react-cookie-consent";

import styles from '../styles/layout.module.css';
import SearchAd from './search_ad';


export const siteTitle = 'Vremea'

export default function Layout({
    children,
    home
  }: {
    children: React.ReactNode
    home?: boolean
  }) {
    const router = useRouter();
    return (
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar collapseOnSelect bg="white" expand="lg" className={`align-items-center p-3 px-md-4 mb-3 ${styles.borderBottom} ${styles.boxShadow}`}>
          <Link href="/" passHref>
            <Navbar.Brand className={styles.logoFont}>{siteTitle}</Navbar.Brand>
          </Link>
          <SearchAd/>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto"  activeKey={router.pathname}>
              <Link href="/" passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="/#cities" passHref>
                <Nav.Link>Orașe</Nav.Link>
              </Link>
              <Link href="/#counties" passHref>
                <Nav.Link>Județe</Nav.Link>
              </Link>
              {/* <Link href="/localitati" passHref>
                <Nav.Link>Localitati</Nav.Link>
              </Link> */}
              {/* <Link href="/about" passHref>
                <Nav.Link>About</Nav.Link>
              </Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
        <main>{children}</main>
        <footer className={styles.footer}>
          <Container fluid>
              <Row>
                <Col>
                  Romania
                </Col>
              </Row>
              <Row>
                <Col xs='auto'>
                  <Link href="https://ionkom.com/about"><a className={styles.footerLink} target="_blank">About</a></Link>
                </Col>
                <Col xs='auto'>
                  <Link href='https://ionkom.com/policies/privacy'><a className={styles.footerLink} target="_blank">Privacy Policy</a></Link>
                </Col>
                <Col xs='auto'>
                  <Link href='https://ionkom.com/policies/terms'><a className={styles.footerLink} target="_blank">Terms and Conditions</a></Link>
                </Col>
                <Col xs='auto'>
                  <Link href='https://openweathermap.org/'><a className={styles.footerLink} target="_blank" rel="noopener">Weather data from OpenWeather (TM)</a></Link>
                </Col>
                {/* <Col xs='auto'>
                  <span className="text-muted">© 2020 Copyright: <Link href="/"><a className={styles.footerLink}>ionkom.com</a></Link></span>
                </Col> */}
              </Row>
          </Container>
        </footer>
        <CookieConsent
          disableStyles={true}
          // location='bottom'
          buttonText='DA, INTELEG'
          buttonClasses="btn btn-secondary float-right"
          containerClasses="alert alert-secondary"
          style={{
            fontSize: '0.85rem',
            link: '#5f6368',

            // display: "flex",
            // flexWrap: "wrap",
            // justifyContent: "space-between",
            // left: "0",
            position: "fixed",
            width: "100%",
            zIndex: "999",
          }}
          buttonStyle={{
            fontSize: '0.85rem'
          }}
        >
          Folosim cookies pentru analiza traficului, continut personalizat si imbunatatirea continua a site-ului.
          Pentru a afla mai multe sau a schimba setarile acceseaza <Link href='/politici/cookies'><a className='alert-link'>Politica de Cookies</a></Link>.  
          Confirmand ca ai inteles sau navigând pe acest website, ești de acord să permiți colectarea de informații prin cookie-uri sau tehnologii similare. 
        </CookieConsent>
      </>
    )
}