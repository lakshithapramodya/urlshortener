import shortUrl from "../models/shortUrl.js";
import analytics from "../models/analytics.js";

export async function createShortUrl(req, res) {
  const { full, user } = req.body;
  const newUrl = await shortUrl.create({
    user: user && user,
    full: req.body.full,
  });
  return res.send(newUrl);
}

export async function handleRedirect(req, res) {
  const shortId = await shortUrl.findOne({ short: req.params.short });

  if (!shortId) {
    shortId.clicks++;
    shortId.save();
    return res.sendStatus(404);
  }

  analytics.create({ shortUrl: shortId._id });

  return res.redirect(shortId.full);
}

export async function getAnalytics(req, res) {
  const data = await analytics.find({}).lean();

  return res.send(data);
}

export async function getStatistics(req, res) {
  const userUrls = await shortUrl.find({ user: req.body.user });
  res.send(userUrls);
}

export async function getShortUrl(req, res) {
  const { short } = req.params;
  const shortId = await shortUrl.findOne({ short }).exec();

  if (!shortId) {
    return res.sendStatus(404);
  }

  return res.json(shortId);
}
