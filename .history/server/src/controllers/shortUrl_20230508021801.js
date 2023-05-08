import shortUrl from "../models/shortUrl.js";
import analytics from "../models/analytics.js";
import user from "../models/user.js";

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
    return res.sendStatus(404);
  }

  analytics.create({ shortUrl: shortId._id });

  return res.redirect(shortId.full);
}

export async function getAccessAnalytics(req, res) {
  const data = await analytics.find({}).lean();

  return res.send(data);
}

export async function getUserAnalytics(req, res) {
  const userUrls = await user.findOne({ req.body.user });
  console.log(req.body.user);
  res.send(userUrls);
}

export async function getShortUrl(req, res) {
  const { short } = req.params;
  const shortId = await shortUrl.findOne({ short }).lean();

  if (!shortId) {
    return res.sendStatus(404);
  }

  return res.json(shortId);
}
