import { Row, Accordion, Col, Container } from 'react-bootstrap';
import { WiUmbrella } from "react-icons/wi";

// local
// libs
import { capitalizeFirstL } from '../lib/strUtils';

// components
import TempDegree from './tempdegree';
import ContextAwareToggle from './contextawaretoggle';
import WeatherStatPair from './weatherstatpair';

// css
import gstyles from '../styles/mobile.module.css';
import styles from '../styles/accordionrow.module.css';


export default function AccordionRow({ dweather, index, timeDisp }) {
  return (
    <div key={index}>
      <Accordion.Toggle as={Row} eventKey={`${index}`} className={`mt-1 ${styles.togleRow}`}>
        <Col xs={3} className='align-self-center'>{timeDisp}</Col>
        <Col md={1} xs={2} className='pl-1 pr-0 align-self-center' style={{ fontSize: '1.3rem', fontWeight: '450' }}>
          <TempDegree value={dweather.main.temp}/>
        </Col>
        <Col xs={2} className="pr-0 pl-0">
          <img
            src={`/weather_icons/${dweather.weather[0].icon}@2x.png`}
            alt={dweather.weather[0].description}
            width={50}
            height={50}
            // responsive='true'
          />
        </Col>
        <Col xs={3} className='pl-0 pr-0 text-right justify-content-right align-self-center' style={{}}>
          <WiUmbrella size='2em' color='#1b4de4'/> {Math.floor(dweather.pop * 100)}%
        </Col>
        <Col md={3} xs={2} className='text-right justify-content-right align-self-center' style={{}}>
          <ContextAwareToggle eventKey={`${index}`} />
        </Col>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={`${index}`}>
        <Row>
          <Container>
            <Row className={`flex-nowrap flex-sm-wrap ${gstyles.mobileRow}`}>
              <Col className={`text-center ${gstyles.mobileCol}`}><span>{capitalizeFirstL(dweather.weather[0].description)}</span></Col>
              <Col className={`text-center ${gstyles.mobileCol}`}><WeatherStatPair pkey='Precipitatii' value={`${Math.floor(dweather.pop)*100}%`}/></Col>
              <Col className={`text-center ${gstyles.mobileCol}`}><WeatherStatPair pkey='Umiditate' value={`${dweather.main.humidity}%`}/></Col>
              <Col className={`text-center ${gstyles.mobileCol}`}><WeatherStatPair pkey='Nori' value={`${Math.floor(dweather.clouds.all)}%`}/></Col>
              <Col className={`text-center ${gstyles.mobileCol}`}><WeatherStatPair pkey='Vant' value={`${Math.floor(dweather.wind.speed*3.6)} kph`}/></Col>
            </Row>
          </Container>
        </Row>
      </Accordion.Collapse>
    </div>
  )
}