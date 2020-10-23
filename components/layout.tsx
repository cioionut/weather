import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import styles from '../styles/layout.module.css'


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
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto"  activeKey={router.pathname}>
              <Link href="/" passHref>
                <Nav.Link>Vremea Acum</Nav.Link>
              </Link>
              <Link href="/judete" passHref>
                <Nav.Link>Judete</Nav.Link>
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
      </>
    )
}