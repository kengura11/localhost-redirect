export default function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send("Error: No code provided.");
  }
  res.redirect(302, `http://127.0.0.1:60606/?code=${code}`);
}
