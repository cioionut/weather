import { Row, Table, Accordion, ListGroup, Col, Container, Card, Button } from 'react-bootstrap';
import { WiRaindrops, WiUmbrella, WiRaindrop } from "react-icons/wi";

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


export default function HourlyWeather({ daily, location }) {
  const title = `Vremea în următoarele 5 zile`;
  const currentDateTime = new Date();
  const timeDisp = currentDateTime.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
  const currentDate = currentDateTime.getDate();
  const dateTimeDisp = `${rodays[currentDateTime.getDay()]}, ${currentDateTime.getDate()} ${ capitalizeFirstL(romonths[currentDateTime.getMonth()]) }`;

  let weatherDayMap = [];
  let listDaily = [];
  let lastDateTime = currentDateTime;
  for (let index = 0; index < daily.length; index++) {
    const dweather = daily[index];
    const weatherDateTime = new Date(dweather.dt * 1000);
    const timeDisp = weatherDateTime.toLocaleTimeString().replace(/([\d]+)(:[\d]{2})(:[\d]{2})(.*)/, "$1$4").toLowerCase();
    const weatherDate = weatherDateTime.getDate()
    
    // group by day
    if (weatherDate !== lastDateTime.getDate() || index == daily.length - 1) {
      const weatherDateDisp = `${rodays[lastDateTime.getDay()]}, ${lastDateTime.getDate()} ${ capitalizeFirstL(romonths[lastDateTime.getMonth()]) }`;
      weatherDayMap.push({
        'weatherDateDisp': weatherDateDisp,
        'listDaily': listDaily
      });
      listDaily = [];
      lastDateTime = weatherDateTime;
    };

    listDaily.push(
      <div key={index}>
        <Accordion.Toggle as={Row} eventKey={`${index}`} className={`mt-1 ${styles.togleRow}`}>
          <Col xs={3} className='align-self-center'>{timeDisp}</Col>
          <Col md={1} xs={2} className='pl-1 pr-0 align-self-center' style={{ fontSize: '1.3rem', fontWeight: '450' }}>
            <TempDegree value={dweather.main.temp}/>
          </Col>
          <Col xs={2} className="pr-0 pl-0">
            <img
              src={`/weather_icons/${dweather.weather[0].icon}@2x.png`}
              alt={dweather.weather[0].description}
              width={50}
              height={50}
              // responsive='true'
            />
          </Col>
          <Col xs={3} className='pl-0 pr-0 text-right justify-content-right align-self-center' style={{}}>
            <WiUmbrella size='2em' color='#1b4de4'/> {Math.floor(dweather.pop * 100)}%
          </Col>
          <Col md={3} xs={2} className='text-right justify-content-right align-self-center' style={{}}>
            <ContextAwareToggle eventKey={`${index}`} />
          </Col>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={`${index}`}>
          <Row>
            <Container>
              <Row className={`flex-nowrap flex-sm-wrap ${gstyles.mobileRow}`}>
                <Col className={`text-center ${gstyles.mobileCol}`}><span>{capitalizeFirstL(dweather.weather[0].description)}</span></Col>
                <Col className={`text-center ${gstyles.mobileCol}`}><WeatherStatPair pkey='Precipitatii' value={`${Math.floor(dweather.pop)*100}%`}/></Col>
                <Col className={`text-center ${gstyles.mobileCol}`}><WeatherStatPair pkey='Umiditate' value={`${dweather.main.humidity}%`}/></Col>
                <Col className={`text-center ${gstyles.mobileCol}`}><WeatherStatPair pkey='Nori' value={`${Math.floor(dweather.clouds.all)}%`}/></Col>
                <Col className={`text-center ${gstyles.mobileCol}`}><WeatherStatPair pkey='Vant' value={`${Math.floor(dweather.wind.speed*3.6)} kph`}/></Col>
              </Row>
            </Container>
          </Row>
        </Accordion.Collapse>
      </div>
    );
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <h2 style={{fontSize: "1.3rem"}}>{ title }</h2>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted" style={{ fontWeight: '400' }}>Buletin meteo pe ore începând de astăzi</Card.Subtitle>
          <Container className="pr-0 pl-0">
            <Row>
              {
                weatherDayMap.map((weatherPair, idx) => 
                <>
                  <hr/>
                  <Col className="mt-3">
                    <Card.Text style={{ fontWeight: "450", fontSize: "1.115rem"}}>{weatherPair.weatherDateDisp}</Card.Text>
                  </Col>
                  <Accordion defaultActiveKey="0" className="container">
                    {weatherPair.listDaily}
                  </Accordion>
                </>)
              }
            </Row>
            <Row className="mt-3">
              <Col>
                <Button style={{borderRadius: 16, fontWeight: 450}} size="sm" href="#forecast-next-days">Vezi vremea pe zile</Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  )
}