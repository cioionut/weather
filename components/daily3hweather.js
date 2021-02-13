import { Row, Table, Accordion, ListGroup, Col, Container } from 'react-bootstrap';

// local
// libs
import { rodays, romonths } from '../lib/constants';
import { checkTime, capitalizeFirstL } from '../lib/strUtils';

// components
import TempDegree from './tempdegree';
import ContextAwareToggle from './contextawaretoggle';
import WeatherStatPair from './weatherstatpair';

// css
import gstyles from '../styles/mobile.module.css';
import styles from '../styles/dailyweather.module.css';


export default function Daily3hWeather(props) {
  const daily = props.daily;
  const listDaily = daily.map((dweather, index) => {
    const dateTime = new Date(dweather.dt * 1000);
    let dateTimeDisp = `${rodays[dateTime.getDay()]} - ${dateTime.getDate()} ${romonths[dateTime.getMonth()]} ${dateTime.getFullYear()}`
    let dayNameDisp = `${rodays[dateTime.getDay()]}`;
    let timeDisp = `ora ${dateTime.getHours()}`;

    if (index == 0) {
      dateTimeDisp = `Astazi, ${dateTimeDisp}`
      dayNameDisp = "Astazi"
    }

    return (
        <div key={index}>
          <Accordion.Toggle as={Row} eventKey={`${index}`} className={`mt-1 ${styles.togleRow}`}>
            <Col md={1} xs={2}>
              <img
                src={`/weather_icons/${dweather.weather[0].icon}@2x.png`}
                alt={dweather.weather[0].description}
                width={50}
                height={50}
                // responsive='true'
              />
            </Col>
            <Col md={2} xs={5} className='pt-2' style={{ fontWeight: '430' }}>{dayNameDisp}, {timeDisp}</Col>
            <Col md={8} xs={3} className='pt-2' style={{ fontWeight: '350' }}>
              <TempDegree value={dweather.main.temp}/>
            </Col>
            <Col md={1} xs={2} className='pt-2 text-right'>
              <ContextAwareToggle eventKey={`${index}`} />
            </Col>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={`${index}`}>
            <Row>
              <Container>
                <Row className='justify-content-center'>
                  <Col xs='auto'>
                    <span>{capitalizeFirstL(dweather.weather[0].description)}</span>
                  </Col>
                </Row>
                <Row className={`flex-nowrap flex-sm-wrap ${gstyles.mobileRow}`}>
                  <Col className={`text-center ${gstyles.mobileCol}`}><WeatherStatPair pkey='Precipitatii' value={`${dweather.pop*100}%`}/></Col>
                  <Col className={`text-center ${gstyles.mobileCol}`}><WeatherStatPair pkey='Umiditate' value={`${dweather.main.humidity}%`}/></Col>
                  <Col className={`text-center ${gstyles.mobileCol}`}><WeatherStatPair pkey='Vant' value={`${Math.floor(dweather.wind.speed*3.6)} kph`}/></Col>
                  <Col className={`text-center ${gstyles.mobileCol}`}><WeatherStatPair pkey='Nori' value={`${Math.floor(dweather.clouds.all)}%`}/></Col>
                </Row>
              </Container>
            </Row>
          </Accordion.Collapse>
        </div>
      )
  });
  return (
    <>
      <Accordion defaultActiveKey="0" className="container">
        {listDaily}
      </Accordion>
    </>
  )
}