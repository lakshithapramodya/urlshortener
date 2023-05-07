import shortUrl from "../models/shortUrl.js";
import analytics from "../models/analytics.js";
import user from "../models/user.js";

export async function createShortUrl(req, res) {
  const { full } = req.body;

  const newUrl = await shortUrl.create({ full });
  return res.send(newUrl);
}

export async function handleRedirect(req, res) {
  const { short } = req.params;

  const shortId = await shortUrl.findOne({ short });

  if (!shortId) {
    return res.sendStatus(404);
  }

  analytics.create({ shortUrl: shortId._id });

  return res.redirect(shortId.full);
}

export async function getAnalytics(req, res) {
  const data = await analytics.find({}).lean();

  return res.send(data);
}

export async function getShortUrl(req, res) {
  const { short } = req.params;
  const shortId = await shortUrl.findOne({ short }).lean();

  if (!shortId) {
    return res.sendStatus(404);
  }

  return res.json(shortId);
}

export async function createUser(req, res) {
  const { username, email, password } = req.body;

  try {
    const newUser = new user.create({ username, email, password });

    res.send(newUser);
  } catch (err) {
    console.error(err);
  }
}
