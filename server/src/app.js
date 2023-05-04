import express from "express";
import config from "../config/defaults.js";
import routes from "./routes/index.js";
import db from "./db.js";
import cors from "cors";

const app = express();

const port = config.port;
const corsOrigin = config.corsOrigin;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: corsOrigin,
  })
);

app.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`);
  db();
  routes(app);
});
