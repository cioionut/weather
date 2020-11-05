import { Row, Col, Container } from 'react-bootstrap';
import styles from '../styles/weather.module.css'
import gstyles from '../styles/global.module.css';
import TempDegree from './tempdegree';
import WeatherStatPair from './weatherstatpair';


export default function CurrentWeather(props) {
  let weatherData = props.weatherData;
  const weatherStatPairs = [
    { pkey: 'Vant', value: Math.floor(weatherData.current.wind_speed*3.6), um: 'kph' },
    { pkey: 'Umiditate', value: Math.floor(weatherData.current.humidity), um: '%' },
    { pkey: 'Nori', value: Math.floor(weatherData.current.clouds), um: '%' },
    { pkey: 'Index UV', value: Math.floor(weatherData.current.uvi) },
    { pkey: 'Vizibilitate', value: Math.floor(weatherData.current.visibility/1000), um: '+km' },
    { pkey: 'Pct. roua', value: <TempDegree value={weatherData.current.dew_point}/> },
    { pkey: 'Presiune', value: Math.floor(weatherData.current.pressure), um: 'hPa' },
  ].map((obj, index) => {
    return (
      <Col md="auto" ms="auto" xs="auto" key={index}>
        <WeatherStatPair pkey={obj.pkey} value={obj.value} um={obj.um} />
      </Col>
    )
  })
  return (
    <Container>
      <Row className={`flex-nowrap flex-sm-wrap ${gstyles.mobileRow}`}>
        {weatherStatPairs}
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