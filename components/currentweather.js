import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import { MdLocationOn, MdLocationOff } from "react-icons/md";

import styles from '../styles/weather.module.css'
import gstyles from '../styles/mobile.module.css';
import TempDegree from './tempdegree';
import WeatherStatPair from './weatherstatpair';
import { capitalizeFirstL } from '../lib/strUtils';


export default function CurrentWeather({ weatherData, locDetect, location }) {
  const currentTime = new Date();
  // const timeDsip = `${String(currentTime.getHours()).padStart(2, '0')}:${String(currentTime.getMinutes()).padStart(2, '0')}`;
  const timeDisp = currentTime.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
  const locationIcon = locDetect ? <MdLocationOn/> : <MdLocationOff/>;
  const locDetection = locDetect ? 'Locația pornită': 'Locație oprită';
  const title = location ? `Vremea în ${location.name}, județul ${location.account_county.name}` : 'Vremea';

  // convert to api-current response
  if (weatherData && 'current' in weatherData) {
    weatherData.main = weatherData.current;
    weatherData.weather = weatherData.current.weather;
    weatherData.visibility = weatherData.current.visibility;
    weatherData.wind = {
      'speed': weatherData.current.wind_speed,
      'deg': weatherData.current.wind_deg,
    };
    weatherData.clouds = {
      'all': weatherData.current.clouds
    };
    weatherData.rain = {
      '1h': weatherData.current.rain && weatherData.current.rain['1h']
    };
    weatherData.snow = {
      '1h': weatherData.current.snow && weatherData.current.snow['1h']
    };
    weatherData.dt = weatherData.current.dt;
    weatherData.sys = {
      'sunrise': weatherData.current.sunrise,
      'sunset': weatherData.current.sunset
    }
  }

  const weatherStatPairs = [
    { pkey: 'Vant', value: Math.floor(weatherData.wind.speed*3.6) + ' kph' },
    { pkey: 'Umiditate', value: Math.floor(weatherData.main.humidity) + '%' },
    { pkey: 'Nori', value: Math.floor(weatherData.clouds.all) + '%' },
    { pkey: 'Vizibilitate', value: Math.floor(weatherData.visibility/1000) + '+ km' },
    { pkey: 'Presiune', value: Math.floor(weatherData.main.pressure) + ' hPa' },
  ].map((obj, index) => {
    return (
      <Col key={index} className={`${gstyles.mobileCol}`}>
        <WeatherStatPair pkey={obj.pkey} value={obj.value} />
      </Col>
    )
  })
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <h1 style={{fontSize: "1.3rem"}}>{ title }</h1>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontWeight: '400' }}>Prognoza meteo { timeDisp } | {locationIcon} {locDetection}</Card.Subtitle>
        <Container className="pl-0">
          <Row className="justify-content-center">
            <Col xs='auto' className='pl-0 pr-0'>
              <img
                src={`/weather_icons/${weatherData.weather[0].icon}@2x.png`}
                alt={weatherData.weather[0].description}
                width={80}
                height={80}
                // responsive='true'
              />
            </Col>
            <Col xs='auto' className='pl-0'>
              <span className={styles.mainTempFont}>
                <TempDegree value={weatherData.main.temp}/>
                  <span>&nbsp;
                    {capitalizeFirstL(weatherData.weather[0].description)}
                  </span>
              </span>
              <p style={{ fontSize: '1.3rem' }}>
                <span style={{ fontWeight: '300' }}>Se simte ca:</span> {Math.floor(weatherData.main.feels_like)}{String.fromCharCode(176)}
              </p>
            </Col>
          </Row>
          {/* alte date despre vreme */}
          <Row className={`flex-nowrap flex-sm-wrap ${gstyles.mobileRow}`}>
            {weatherStatPairs}
          </Row>
          <Row className="mt-3">
            <Col>
              <Button style={{borderRadius: 16, fontWeight: 450}} size="sm" href="#forecast-next-days">Vezi vremea pe zile</Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}