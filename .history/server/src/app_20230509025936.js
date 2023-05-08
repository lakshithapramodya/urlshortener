import express from "express";
import config from "../config/defaults.js";
import routes from "./routes/index.js";
import db from "./db.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const port = config.port;
const corsOrigin = config.corsOrigin;

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: corsOrigin,
    credentials: true,
  })
);

db();
routes(app);

app.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`);
  console.log("This is version 1.8");
});
