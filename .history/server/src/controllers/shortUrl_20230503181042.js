import shortUrl from "../models/shortUrl.js";

export async function createShortUrl(req, res) {
  const { full } = req.body;

  const newUrl = await shortUrl.create({ full });
  return res.send(newUrl);
}

export async function handleRedirect(req, res) {
  const { shortId } = req.params;

  const short = await shortUrl.findOne({ shortId });

  if (!short) {
    return res.sendStatus(404);
  }

  return res.redirect(short.full);
}
