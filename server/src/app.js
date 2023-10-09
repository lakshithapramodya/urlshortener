import express from "express";
import config from "../config/defaults.js";
import routes from "./routes/index.js";
import db from "./db.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const port = config.port;
const corsOptions = {
  origin: config.corsOrigin,
  credentials: true,
};

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsOptions)); // Use the configured CORS options
db();
routes(app);

app.listen(port, () => {
  console.log(`Application listening at ${port}`);
  console.log("This is version 2.0");
});
