export default function handler(req, res) {
  const { message } = req.body || {};

  if (!message) {
    return res.status(400).json({ error: "No message provided" });
  }

  if (message.includes("You've earned points")) {
    return res.json({
      flag: "FLAG{Congratulations now you are a Hacker! }"
    });
  }

  if (message.includes("Congratulations")) {
    return res.json({
      flag: "FLAG{Congratulations now you are a Hacker! }"
    });
  }

  return res.json({ flag: "No flag for this message" });
}
