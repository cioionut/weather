// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import weatherExamplePayload from '../../data/init_fday5_weather';

export default async (req, res) => {
  // for development return the same payload
  res.statusCode = 200;
  return res.json(weatherExamplePayload);
}
