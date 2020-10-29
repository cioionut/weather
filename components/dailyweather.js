import { Row, Table, Accordion, ListGroup, Col } from 'react-bootstrap';
import TempDegree from './tempdegree';
import { rodays, romonths } from '../lib/constants';


export default function DailyWeather(props) {
  const daily = props.daily;
  const listDaily = daily.map((dweather, index) => {
  const dateTime = new Date(dweather.dt * 1000);
  let dateTimeDisp = `${rodays[dateTime.getDay()]} - ${dateTime.getDate()} ${romonths[dateTime.getMonth()]} ${dateTime.getFullYear()}`
  if (index == 0)
      dateTimeDisp = `Astazi, ${dateTimeDisp}`
  return (
      <div key={index}>
        <Accordion.Toggle as={Row} eventKey={`${index}`}>
          <Col xs="auto">
            <Row className="justify-content-center">
              <img src={`https://openweathermap.org/img/wn/${dweather.weather[0].icon}@2x.png`} height="60px"></img>
            </Row>
            <Row className="justify-content-center">
              <TempDegree value={dweather.temp.max}/>/<TempDegree value={dweather.temp.min}/>
            </Row>
          </Col>
          <Col>
            <Row style={{ fontWeight: '430', fontSize: '1.3em' }}>
              <Col>{dateTimeDisp}</Col>
            </Row>
            <Row>
              <Col><span style={{ fontWeight: '300' }}>Precipitatii:</span> {dweather.pop}%</Col>
              <Col><span style={{ fontWeight: '300' }}>Umiditate:</span> {dweather.humidity}% </Col>
              <Col><span style={{ fontWeight: '300' }}>Vant:</span> {dweather.wind_speed}kph</Col>
            </Row>
          </Col>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={`${index}`}>
          <Row className="justify-content-center">
            <TempDegree value={dweather.temp.morn}/>
            <TempDegree value={dweather.temp.day}/>
            <TempDegree value={dweather.temp.eve}/>
            <TempDegree value={dweather.temp.night}/>
          </Row>
        </Accordion.Collapse>
      </div>
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