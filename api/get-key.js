export default function handler(req, res) {
  res.status(200).json({ apiKey: process.env.TWELVE_DATA_KEY });
}
