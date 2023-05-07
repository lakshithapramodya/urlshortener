import shortUrl from "../models/shortUrl.js";
import analytics from "../models/analytics.js";
import user from "../models/user.js";

export async function createShortUrl(req, res) {
  const newUrl = await shortUrl.create({ full: req.body.full });
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

export async function userRegister(req, res) {
  try {
    const newUser = await user.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    res.send(newUser);
  } catch (err) {
    console.error(err);
  }
}

export async function getUser(req, res) {
  const validUser = await user.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (validUser) {
    return res.json({ status: "ok", user: true });
  } else {
    return res.json({ status: "error", user: false });
  }
}
