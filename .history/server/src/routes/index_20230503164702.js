import express from "express";
import { createShortUrl } from "../controllers/shortUrl";

export default function routes(app) {
  app.get("/healthCheck", (req, res) => {
    res.send("App is healthy");
  });

  app.post("/api/url", createShortUrl);
}
