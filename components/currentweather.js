import { Row, Col, ListGroup } from 'react-bootstrap';
import styles from '../styles/weather.module.css'


export default function CurrentWeather(props) {
    return (
      <>
        <Row className="justify-content-center">
          <Col md="auto" ms="auto" xs="auto">
            <img src={`https://openweathermap.org/img/wn/${props.weatherData.current.weather[0].icon}@2x.png`}></img>
          </Col>
          <Col md="auto" ms="auto" xs="auto">
            <Row className={styles.mainTempFont}>
              {Math.floor(props.weatherData.current.temp)}{String.fromCharCode(176)} - {props.weatherData.current.weather[0].description}
            </Row>
            <Row style={{ fontSize: '1.3em' }}>
              <p>
                <span style={{ fontWeight: '300' }}>Se simte ca:</span> {Math.floor(props.weatherData.current.feels_like)}{String.fromCharCode(176)}
              </p>
            </Row>
          </Col>
        </Row>
      </>
    )
}