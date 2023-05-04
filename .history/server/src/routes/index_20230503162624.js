import express from "express";

export default function routes(app) {
  app.get("/healthCheck", (res, req) => {
    res.send("App is healthy");
  });
}
