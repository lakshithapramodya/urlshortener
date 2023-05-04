import shortUrl from "../models/shortUrl.js";

export async function createShortUrl(req, res) {
  const { full } = req.body;

  const newUrl = await shortUrl.create({ full });
  return res.send(newUrl);
}

export async function handleRedirect(req, res) {
  const { shortId } = req.params;

  const dest = await shortUrl.findOne({ shortId }).lean();

  if (!dest) {
    return res.sendStatus(404);
  }
}
