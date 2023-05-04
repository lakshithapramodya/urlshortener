import { createShortUrl } from "../controllers/shortUrl.js";

export default function routes(app) {
  app.get("/healthCheck", (req, res) => {
    res.send("App is healthy");
  });

  app.post("/api/url", (req, res) => createShortUrl(req, res));
}
