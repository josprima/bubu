export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { url } = req.query;

    try {
      const response = await fetch(url);
      const svgData = await response.text();

      res.send(svgData);
    } catch (error) {
      //
    }
  }
}
