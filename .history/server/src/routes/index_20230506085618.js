import {
  createShortUrl,
  handleRedirect,
  getAnalytics,
  getShortUrl,
} from "../controllers/shortUrl.js";
import { createUser, getUser } from "../controllers/user.js";

export default function routes(app) {
  app.get("/healthCheck", (req, res) => {
    res.send("App is healthy");
  });

  app.post("/api/url", createShortUrl);

  app.get("/:short", handleRedirect);

  app.get("/api/url/:short", getShortUrl);

  app.get("/api/analytics", getAnalytics);

  app.post("/api/register", createUser);

  app.post("/api/login", getUser);
}
