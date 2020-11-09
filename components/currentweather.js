import { Row, Col, Container } from 'react-bootstrap';
import styles from '../styles/weather.module.css'
import gstyles from '../styles/mobile.module.css';
import TempDegree from './tempdegree';
import WeatherStatPair from './weatherstatpair';


export default function CurrentWeather(props) {
  let weatherData = props.weatherData;
  const weatherStatPairs = [
    { pkey: 'Vant', value: Math.floor(weatherData.current.wind_speed*3.6) + ' kph' },
    { pkey: 'Umiditate', value: Math.floor(weatherData.current.humidity) + '%' },
    { pkey: 'Nori', value: Math.floor(weatherData.current.clouds) + '%' },
    { pkey: 'Index UV', value: Math.floor(weatherData.current.uvi) },
    { pkey: 'Vizibilitate', value: Math.floor(weatherData.current.visibility/1000) + '+ km' },
    // { pkey: 'Pct. roua', value: <TempDegree value={weatherData.current.dew_point}/> },
    // { pkey: 'Presiune', value: Math.floor(weatherData.current.pressure) + ' hPa' },
  ].map((obj, index) => {
    return (
      <Col key={index} className={`text-center ${gstyles.mobileCol}`}>
        <WeatherStatPair pkey={obj.pkey} value={obj.value} />
      </Col>
    )
  })
  return (
    <Container>
      <Row className={`flex-nowrap flex-sm-wrap ${gstyles.mobileRow}`}>
        {weatherStatPairs}
      </Row>
      <Row className="justify-content-center">
        <Col xs='auto' className='pl-0 pr-0'>
          <img src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}></img>
        </Col>
        <Col xs='auto' className='pl-0'>
          <span className={styles.mainTempFont}>
            <TempDegree value={weatherData.current.temp}/>
              <span style={{textTransform: 'capitalize'}}>&nbsp;
                {weatherData.current.weather[0].description}
              </span>
          </span>
          <p style={{ fontSize: '1.3rem' }}>
            <span style={{ fontWeight: '300' }}>Se simte ca:</span> {Math.floor(weatherData.current.feels_like)}{String.fromCharCode(176)}
          </p>
        </Col>
      </Row>
    </Container>
  )
}