import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import { Container, Row } from 'react-bootstrap'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta property="og:site_name" content={siteTitle}></meta>
        <meta property="og:title" content={`${siteTitle}`}></meta>
        <meta property="og:url" content="https://vremea.ionkom.com/"></meta>
        <meta
            name="description"
            content="Afla cum va fi vremea in localitatea ta"
        />
      </Head>
      <Container>
        <Row className="justify-content-center">
          <ul>
            <li>
              <Link href="/vremea/localitatea-Municipiul-Bucuresti-judetul-Bucuresti/2715"><a>Bucuresti</a></Link>
            </li>
            <li>
              <Link href="/vremea/localitatea-Vadastrita-judetul-Olt/13706"><a>Vadastrita</a></Link>
            </li>
          </ul>
        </Row>
      </Container>
    </Layout>
  )
}
