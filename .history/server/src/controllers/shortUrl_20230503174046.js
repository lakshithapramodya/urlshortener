import shortUrl from "../models/shortUrl.js";

export default async function createShortUrl(req, res) {
  const newUrl = await shortUrl.create({ full: req.body.full });
  return res.send(newUrl);
}
