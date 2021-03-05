import { Row, Accordion, Col, Container, Card, Button } from 'react-bootstrap';

// local
// libs
import { rodays, romonths } from '../lib/constants';
import { checkTime, capitalizeFirstL } from '../lib/strUtils';

// components
import AccordionRow from './accordionrow';


export default function HourlyWeather({ daily, location }) {
  const title = `Astăzi la ${location.name}`;
  const currentTime = new Date();
  const timeDisp = currentTime.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
  const currentDay = currentTime.getDay();
  const dateTimeDisp = `${rodays[currentTime.getDay()]}, ${currentTime.getDate()} ${ capitalizeFirstL(romonths[currentTime.getMonth()]) }`


  let listDaily = [];
  for (let index = 0; index < daily.length; index++) {
    const dweather = daily[index];
    const dateTime = new Date(dweather.dt * 1000);
    const timeDisp = dateTime.toLocaleTimeString().replace(/([\d]+)(:[\d]{2})(:[\d]{2})(.*)/, "$1$4").toLowerCase();

    // break for other days
    if (dateTime.getDay() > currentDay) break;

    listDaily.push(
      <AccordionRow key={index} dweather={dweather} index={index} timeDisp={timeDisp} />
    )
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <h2 style={{fontSize: "1.3rem"}}>{ title }</h2>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted" style={{ fontWeight: '400' }}>Prognoza meteo pe ore începând de acum {timeDisp} </Card.Subtitle>
          <Container className="pr-0 pl-0">
            <Row>
              <Col className="mt-3">
                <Card.Text style={{ fontWeight: "450", fontSize: "1.115rem"}}>{dateTimeDisp}</Card.Text>
              </Col>
              <Accordion defaultActiveKey="0" className="container">
                {listDaily}
              </Accordion>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  )
}