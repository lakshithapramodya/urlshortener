import express from "express";
import config from "../config/defaults.js";
import routes from "./routes/index.js";
import db from "./db.js";

const app = express();

const port = config.port;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`);
  db();
  routes(app);
});
