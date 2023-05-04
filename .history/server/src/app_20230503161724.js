import express from "express";
import config from "../config/defaults.js";

const app = express();

const port = config.port;

app.listen(port, () =>
  console.log("Application listening at http://localhost:5000")
);
