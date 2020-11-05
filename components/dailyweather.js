import { Row, Table, Accordion, ListGroup, Col } from 'react-bootstrap';
import TempDegree from './tempdegree';
import { rodays, romonths } from '../lib/constants';
import ContextAwareToggle from './contextawaretoggle';
import styles from '../styles/dailyweather.module.css';


export default function DailyWeather(props) {
  const daily = props.daily;
  const listDaily = daily.map((dweather, index) => {
    const dateTime = new Date(dweather.dt * 1000);
    let dateTimeDisp = `${rodays[dateTime.getDay()]} - ${dateTime.getDate()} ${romonths[dateTime.getMonth()]} ${dateTime.getFullYear()}`
    let dayNameDisp = `${rodays[dateTime.getDay()]}`

    if (index == 0) {
      dateTimeDisp = `Astazi, ${dateTimeDisp}`
      dayNameDisp = "Astazi"
    }

    return (
        <div key={index}>
          <Accordion.Toggle as={Row} eventKey={`${index}`} className={`mt-1 ${styles.togleRow}`}>
            <Col md={1} sm={3} xs={3}>
              <img src={`https://openweathermap.org/img/wn/${dweather.weather[0].icon}@2x.png`} height='55px'></img>
            </Col>
            <Col md={2} xs={4} className='pt-2' style={{ fontWeight: '430', fontSize: '1.3em' }}>{dayNameDisp}</Col>
            <Col className='pt-2' style={{ fontWeight: '350', fontSize: '1.3em' }}>
              <TempDegree value={dweather.temp.max}/>/<TempDegree value={dweather.temp.min}/>
            </Col>
            <Col xs={1}  className='pt-2 justify-content-end'>
              <ContextAwareToggle eventKey={`${index}`} />
            </Col>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={`${index}`}>
            <Row>
              <Col md={{ offset: 1 }}><span style={{ fontWeight: '300' }}>Precipitatii:</span> {dweather.pop*100}%</Col>
              <Col><span style={{ fontWeight: '300' }}>Umiditate:</span> {dweather.humidity}% </Col>
              <Col><span style={{ fontWeight: '300' }}>Vant:</span> {Math.floor(dweather.wind_speed*3.6)} kph</Col>
              {/* <Col md={{ span: 1, offset: 1 }}>
                <TempDegree value={dweather.temp.morn}/>
              </Col>
              <Col>
                <TempDegree value={dweather.temp.day}/>
                <TempDegree value={dweather.temp.eve}/>
                <TempDegree value={dweather.temp.night}/>
              </Col> */}
              <hr/>
            </Row>
          </Accordion.Collapse>
        </div>
      )
  });
  return (
    <>
      <Accordion defaultActiveKey="0" className="container">
        <hr/>
        {listDaily}
      </Accordion>
    </>
  )
}