import { Row, Col } from 'react-bootstrap';
import styles from '../styles/weather.module.css'


export default function CurrentWeather(props) {
    return (
      <>
        <Row className="justify-content-center">
          <Col md="auto">
            <img src={`http://openweathermap.org/img/wn/${props.weatherData.current.weather[0].icon}@2x.png`}></img>
            {/* <iframe aria-label="weather icon" role="img" sandbox=""
              frameBorder="0"
              src={`data:text/html,<style>body{background:url('http://openweathermap.org/img/wn/${props.weatherData.current.weather[0].icon}@2x.png') center/cover no-repeat;padding:0;margin:0;overflow:hidden}</style>`}>
              </iframe> */}
          </Col>
          <Col md="auto">
            <Row className={styles.mainTempFont}>
              {Math.floor(props.weatherData.current.temp)}{String.fromCharCode(176)} - {props.weatherData.current.weather[0].description}
            </Row>
            <Row style={{ fontSize: '1.3em' }}>
              <p>
                <span style={{ fontWeight: '300' }}>Se simte ca:</span> {Math.floor(props.weatherData.current.feels_like)}{String.fromCharCode(176)}
              </p>
              <span> </span>
            </Row>
          </Col>
        </Row>
      </>
    )
}