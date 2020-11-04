import { Row, Col, Container } from 'react-bootstrap';
import styles from '../styles/weather.module.css'


export default function CurrentWeather(props) {
  let weatherData = props.weatherData;
  return (
    <Container>
      <Row style={{ fontWeight: '300' }}>
        <Col>Vant: <span style={{ fontWeight: '400' }}>{Math.floor(weatherData.current.wind_speed*3.6)} kph</span></Col>
        <Col>Umiditate: <span style={{ fontWeight: '400' }}>{weatherData.current.humidity}%</span></Col>
        <Col>Nori: <span style={{ fontWeight: '400' }}>{weatherData.current.clouds}%</span></Col>
        {/* <Col>Pct. Condensare(de roua): {weatherData.current.dew_point}</Col> */}
        <Col>Index UV: <span style={{ fontWeight: '400' }}>{weatherData.current.uvi}</span></Col>
        <Col>Vizibilitate: <span style={{ fontWeight: '400' }}>{Math.floor(weatherData.current.visibility / 1000)} +km</span></Col>
        {/* <Col>Presiune: {weatherData.current.pressure} hPa</Col> */}
      </Row>
      <Row className="justify-content-center">
        <Col md="auto" ms="auto" xs="auto">
          <img src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}></img>
        </Col>
        <Col md="auto" ms="auto" xs="auto">
          <Row className={styles.mainTempFont}>
            {Math.floor(weatherData.current.temp)}{String.fromCharCode(176)} - {weatherData.current.weather[0].description}
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