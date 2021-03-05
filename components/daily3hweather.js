import { Row, Accordion, Col, Container, Card, Button } from 'react-bootstrap';

// local
// libs
import { rodays, romonths } from '../lib/constants';
import { checkTime, capitalizeFirstL } from '../lib/strUtils';

// components
import AccordionRow from './accordionrow';
import FeedAd from './feed_ad';


export default function Daily3hWeather({ daily, location }) {
  const title = `Vremea în următoarele 5 zile`;
  const currentDateTime = new Date();

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
    listDaily.push(<AccordionRow key={index} dweather={dweather} index={index} timeDisp={timeDisp} />);
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
              {
                weatherDayMap.map((weatherPair, idx) =>
                  <div key={idx}>
                  <Row className="mt-3">
                    <Col>
                      <Card.Text style={{ fontWeight: "450", fontSize: "1.115rem"}}>{weatherPair.weatherDateDisp}</Card.Text>
                    </Col>
                    <Accordion defaultActiveKey="0" className="container">
                      {weatherPair.listDaily}
                    </Accordion>
                  </Row>
                  {
                    (idx % 2 === 0) &&
                    <Row>
                      <Col className="pr-0 pl-0">
                        <Card style={{border: 0}}>
                          <Card.Text className="text-right mt-1 mb-0 mr-1 text-muted" style={{fontSize: "0.8rem"}}>Advertisement</Card.Text>
                          <FeedAd/>
                        </Card>
                      </Col>
                    </Row>
                  }
                  </div>
                )
              }
          </Container>
        </Card.Body>
      </Card>
    </>
  )
}