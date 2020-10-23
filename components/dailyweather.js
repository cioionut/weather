import { Row, Table } from 'react-bootstrap';
import TempDegree from './tempdegree';
import { rodays, romonths } from '../lib/constants';


export default function DailyWeather(props) {
    const daily = props.daily;
    const listDaily = daily.map((dweather, index) => {
        const dateTime = new Date(dweather.dt * 1000);
        let dateTimeDisp = `${rodays[dateTime.getDay()]} - ${dateTime.getDate()} ${romonths[dateTime.getMonth()]}`
        if (index == 0)
            dateTimeDisp = `Azi, ${dateTimeDisp}`
        return (
            <tr key={index}>
                <td>{dateTimeDisp}</td>
                <td><TempDegree value={dweather.temp.max}/>/<TempDegree value={dweather.temp.min}/></td>
                <td><TempDegree value={dweather.temp.morn}/></td>
                <td><TempDegree value={dweather.temp.day}/></td>
                <td><TempDegree value={dweather.temp.eve}/></td>
                <td><TempDegree value={dweather.temp.night}/></td>
            </tr>
        )
    });
    return (
      <>
        <Row className="justify-content-center">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Data</th>
                    <th>Max-Min</th>
                    <th>Dimineata</th>
                    <th>Amiaza</th>
                    <th>Seara</th>
                    <th>Noaptea</th>
                    </tr>
                </thead>
                <tbody>
                    {listDaily}
                </tbody>
            </Table>
        </Row>
      </>
    )
}