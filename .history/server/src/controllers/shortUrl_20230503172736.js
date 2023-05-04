import shortUrl from "../models/shortUrl.js";

export async function createShortUrl(req, res) {
  const { full } = req.body;

  const newUrl = await shortUrl.create({ full: full });
  return res.send(newUrl);
}
