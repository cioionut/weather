import { Row, Col, Container } from 'react-bootstrap';
import styles from '../styles/weather.module.css'
import gstyles from '../styles/global.module.css';
import TempDegree from './tempdegree';
import WeatherStatPair from './weatherstatpair';


export default function CurrentWeather(props) {
  let weatherData = props.weatherData;
  return (
    <Container>
      <Row className={`flex-nowrap flex-sm-wrap ${gstyles.mobileRow}`}>
        <Col md='auto' ms='auto' xs='auto' >
          <WeatherStatPair pkey='Vant' value={Math.floor(weatherData.current.wind_speed*3.6)} um='kph' />
        </Col>
        <Col md='auto' ms='auto' xs='auto' >
          <WeatherStatPair pkey='Umiditate' value={Math.floor(weatherData.current.humidity)} um='%' />
        </Col>
        <Col md='auto' ms='auto' xs='auto' >
          <WeatherStatPair pkey='Nori' value={Math.floor(weatherData.current.clouds)} um='%' />
        </Col>
        <Col md='auto' ms='auto' xs='auto' >
          <WeatherStatPair pkey='Index UV' value={Math.floor(weatherData.current.uvi)} />
        </Col>
        <Col md='auto' ms='auto' xs='auto' >
          <WeatherStatPair pkey='Vizibilitate' value={Math.floor(weatherData.current.visibility / 1000)} um='+km' />
        </Col>
        <Col md='auto' ms='auto' xs='auto' >
          <WeatherStatPair pkey='Pct. roua' value={<TempDegree value={weatherData.current.dew_point}/>} />
        </Col>
        <Col md='auto' ms='auto' xs='auto' >
          <WeatherStatPair pkey='Presiune' value={Math.floor(weatherData.current.pressure)} um='hPa' />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="auto" ms="auto" xs="auto">
          <img src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}></img>
        </Col>
        <Col md="auto" ms="auto" xs="auto">
          <Row className={styles.mainTempFont}>
            <TempDegree value={weatherData.current.temp}/> - {weatherData.current.weather[0].description}
          </Row>
          <Row style={{ fontSize: '1.3em' }}>
            <p>
              <span style={{ fontWeight: '300' }}>Se simte ca:</span> {Math.floor(weatherData.current.feels_like)}{String.fromCharCode(176)}
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}