import {
  createShortUrl,
  handleRedirect,
  getAnalytics,
} from "../controllers/shortUrl.js";

export default function routes(app) {
  app.get("/healthCheck", (req, res) => {
    res.send("App is healthy");
  });

  app.post("/api/url", createShortUrl);

  app.get("/:short", handleRedirect);

  app.get("/api/url/:shor", getShortUrl);

  app.get("/api/analytics", getAnalytics);
}
