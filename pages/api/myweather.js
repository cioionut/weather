// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import weatherExamplePayload from '../../data/init_current_weather'

export default async (req, res) => {


  // for development return the same payload
  res.statusCode = 200;
  return res.json(weatherExamplePayload);

  const {
    query: { lat, lon, lang },
  } = req;
  const { query } = req;
  const openweatherApiUrl = process.env.OPENWEATHER_API_URL;
  const openweatherApiKey = process.env.OPENWEATHER_API_KEY;
  let url = new URL(`${openweatherApiUrl}/onecall`);
  let queryParams = {
    lat, lon, lang,
    appid: openweatherApiKey,
    units: 'metric',
    exclude: 'minutely'
  };
  Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]))

  let owRes = await fetch(url)
  // .then(response => response.json())
  // .then(data => {
  //   // console.log('Success:', data);
  //   res.statusCode = 200;
  //   return res.json(data);
  // })
  // .catch((error) => {
  //   console.error('Error:', error);
  // });

  let owPayload = await owRes.json();
  res.statusCode = 200;
  return res.json(owPayload);
}
