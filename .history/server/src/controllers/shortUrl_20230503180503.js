import shortUrl from "../models/shortUrl.js";

export async function createShortUrl(req, res) {
  const { full } = req.body;

  const newUrl = await shortUrl.create({ full });
  return res.send(newUrl);
}

export async function handleRedirect(req, res) {
  const { short } = req.params;

  const shortUrl = await shortUrl.findOne({ short }).lean();

  if (!shortUrl) {
    return res.sendStatus(404);
  }

  return res.redirect(short.full);
}
