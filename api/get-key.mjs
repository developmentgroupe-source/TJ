export default function handler(req, res) {
  const key = process.env.TWELVE_DATA_KEY;
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ apiKey: key || null });
}
