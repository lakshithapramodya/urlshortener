import express from "express";
import config from "../config/defaults.js";
import routes from "./routes/index.js";

const app = express();

const port = config.port;

app.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`);
  routes(app);
});
