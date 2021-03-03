import { Row, Table, Accordion, ListGroup, Col, Container } from 'react-bootstrap';
import TempDegree from './tempdegree';
import { rodays, romonths } from '../lib/constants';
import ContextAwareToggle from './contextawaretoggle';
import styles from '../styles/dailyweather.module.css';
import WeatherStatPair from './weatherstatpair';
import { WiHorizonAlt, WiHorizon } from "react-icons/wi";
import { checkTime } from '../lib/strUtils';
import gstyles from '../styles/mobile.module.css';


function NormalFW({ children }) {
  return (
    <span style={{fontWeight: 450}}>{children}</span>
  )
}
function SoftBold({ children }) {
  return (
    <span style={{fontWeight: 370}}>{children}</span>
  )
}

export default function DailyWeather(props) {
  const daily = props.daily;
  const listDaily = daily.map((dweather, index) => {
    const dateTime = new Date(dweather.dt * 1000);
    const sunriseTime = new Date(dweather.sunrise * 1000);
    const sunriseDisp = `${checkTime(sunriseTime.getHours())}:${checkTime(sunriseTime.getMinutes())}`;
    const sunsetTime = new Date(dweather.sunset * 1000);
    const sunsetDisp = `${checkTime(sunsetTime.getHours())}:${checkTime(sunsetTime.getMinutes())}`;


    let dateTimeDisp = `${rodays[dateTime.getDay()]} - ${dateTime.getDate()} ${romonths[dateTime.getMonth()]} ${dateTime.getFullYear()}`
    let dayNameDisp = `${rodays[dateTime.getDay()]}`

    if (index == 0) {
      dateTimeDisp = `Astazi, ${dateTimeDisp}`
      dayNameDisp = "Astazi"
    }

    return (
        <div key={index}>
          <Accordion.Toggle as={Row} eventKey={`${index}`} className={`mt-1 ${styles.togleRow}`}>
            <Col md={1} xs={3}>
              <img
                src={`/weather_icons/${dweather.weather[0].icon}@2x.png`}
                alt={dweather.weather[0].description}
                width={50}
                height={50}
                // responsive='true'
              />
            </Col>
            <Col md={2} xs={4} className='pt-2' style={{ fontWeight: '430', fontSize: '1.3em' }}>{dayNameDisp}</Col>
            <Col md={8} xs={3} className='pt-2' style={{ fontWeight: '350', fontSize: '1.3em' }}>
              <TempDegree value={dweather.temp.max}/>/<TempDegree value={dweather.temp.min}/>
            </Col>
            <Col md={1} xs={2} className='pt-2 text-right'>
              <ContextAwareToggle eventKey={`${index}`} />
            </Col>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={`${index}`}>
            <Row>
              <Container>
                {/* <Row className='justify-content-center'>
                  <Col xs='auto'>
                    <span style={{textTransform: 'capitalize'}}>
                      {dweather.weather[0].description} 
                    </span>
                  </Col>
                </Row> */}
                <Row className={`flex-nowrap flex-sm-wrap ${gstyles.mobileRow}`}>
                  <Col className={`text-center ${gstyles.mobileCol}`}><WeatherStatPair pkey='Precipitatii' value={`${dweather.pop*100}%`}/></Col>
                  <Col className={`text-center ${gstyles.mobileCol}`}><WeatherStatPair pkey='Umiditate' value={`${dweather.humidity}%`}/></Col>
                  <Col className={`text-center ${gstyles.mobileCol}`}><WeatherStatPair pkey='Vant' value={`${Math.floor(dweather.wind_speed*3.6)} kph`}/></Col>
                  <Col className={`text-center ${gstyles.mobileCol}`}><WeatherStatPair pkey='Nori' value={`${Math.floor(dweather.clouds)}%`}/></Col>
                  <Col className={`text-center ${gstyles.mobileCol}`}><WeatherStatPair pkey='Index UV' value={Math.floor(dweather.uvi)}/></Col>
                  <Col className={`text-center ${gstyles.mobileCol}`}><WeatherStatPair pkey='Pct. condensare' value={<TempDegree value={dweather.dew_point}/>}/></Col>
                </Row>
                <Row className='justify-content-center'>
                  <Col xs='auto'>
                    <span style={{textTransform: 'capitalize'}}>
                      {dweather.weather[0].description} 
                    </span>
                  </Col>
                  <Col xs='auto'>
                    <WeatherStatPair pkey='Min' value={<TempDegree value={dweather.temp.min}/>}/>
                  </Col>
                  <Col xs='auto'>
                    <WeatherStatPair pkey='Max' value={<TempDegree value={dweather.temp.max}/>}/>
                  </Col>
                  <Col xs='auto'>
                    <WeatherStatPair pkey='Dimineata' value={<TempDegree value={dweather.feels_like.morn}/>}/>
                  </Col>
                  <Col xs='auto'>
                    <WeatherStatPair pkey='Ziua' value={<TempDegree value={dweather.feels_like.day}/>}/>
                  </Col>
                  <Col xs='auto'>
                    <WeatherStatPair pkey='Seara' value={<TempDegree value={dweather.feels_like.eve}/>}/>
                  </Col>
                </Row>
                <Row className='justify-content-center'>
                  <Col xs='auto'><WiHorizon size={30}/><WeatherStatPair pkey='Rasarit' value={sunriseDisp} /></Col>
                  <Col xs='auto'><WiHorizonAlt size={30}/><WeatherStatPair pkey='Apus' value={sunsetDisp} /></Col>
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