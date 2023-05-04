import express from "express";
import config from "config";

const app = express();

const port = config.get("port");

app.listen(port, () =>
  console.log("Application listening at http://localhost:5000")
);
