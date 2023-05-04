import shortUrl from "../models/shortUrl";

export default async function createShortUrl(req, res) {
  const { full } = req.body;

  const shortUrl = await shortUrl.create({ full });
}
