import express from "express";

export default function routes(app) {
  app.get("/healthCheck", (req, res) => {
    res.send("App is healthy");
  });
}
