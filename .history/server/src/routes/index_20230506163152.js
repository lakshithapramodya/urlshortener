import {
  createShortUrl,
  handleRedirect,
  getAnalytics,
  getShortUrl,
} from "../controllers/shortUrl.js";
import { signup, login, verifyToken, getUser } from "../controllers/user.js";

export default function routes(app, router) {
  app.get("/healthCheck", (req, res) => {
    res.send("App is healthy");
  });

  app.post("/api/url", createShortUrl);

  app.get("/:short", handleRedirect);

  app.get("/api/url/:short", getShortUrl);

  app.get("/api/analytics", getAnalytics);

  router.post("/api/signup", signup);
  router.post("/api/login", login);
  router.get("/api/user", verifyToken, getUser);
}
