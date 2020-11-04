import { Row, Table, Accordion, ListGroup, Col } from 'react-bootstrap';
import TempDegree from './tempdegree';
import { rodays, romonths } from '../lib/constants';


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
        <a key={index}>
          <Accordion.Toggle as={Row} eventKey={`${index}`} className="mt-3">
            <Col xs="auto">
              <Row className="justify-content-center">
                <img src={`https://openweathermap.org/img/wn/${dweather.weather[0].icon}@2x.png`} height="50px"></img>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col xs="auto" style={{ fontWeight: '430', fontSize: '1.3em' }}>{dayNameDisp}</Col>
                <Col style={{ fontWeight: '350', fontSize: '1.3em' }}>
                  <TempDegree value={dweather.temp.max}/>/<TempDegree value={dweather.temp.min}/>
                </Col>
              </Row>
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
            </Row>
          </Accordion.Collapse>
        </a>
      )
  });
  return (
    <>
      <Row>
        <Accordion defaultActiveKey="0" className="container">
          {listDaily}
        </Accordion>
      </Row>
    </>
  )
}