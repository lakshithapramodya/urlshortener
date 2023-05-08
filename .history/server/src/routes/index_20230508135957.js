import {
  createShortUrl,
  handleRedirect,
  getShortUrl,
} from "../controllers/shortUrl.js";
import {
  signup,
  login,
  verifyToken,
  getUser,
  logout,
} from "../controllers/user.js";

export default function routes(app) {
  app.get("/healthCheck", (req, res) => {
    res.send("App is healthy");
  });

  app.post("/api/url", createShortUrl);

  app.get("/:short", handleRedirect);

  app.get("/api/url/:short", getShortUrl);

  app.get("/api/analytics", getsAnalytics);
  app.post("/api/statistics", getStatistics);

  app.post("/api/signup", signup);
  app.post("/api/login", login);
  app.get("/api/user", verifyToken, getUser);
  app.get("/api/logout", verifyToken, logout);
}
