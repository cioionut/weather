import Image from 'next/image'
import { Row, Col, Container } from 'react-bootstrap';
import styles from '../styles/weather.module.css'
import gstyles from '../styles/mobile.module.css';
import TempDegree from './tempdegree';
import WeatherStatPair from './weatherstatpair';
import { capitalizeFirstL } from '../lib/strUtils';


export default function CurrentWeather(props) {
  let weatherData = props.weatherData;

  // if (!weatherData) return null;

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
    </Container>
  )
}