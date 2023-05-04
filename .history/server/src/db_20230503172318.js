import config from "../config/defaults.js";
import mongoose from "mongoose";

async function db() {
  const dbUri = config.dbUri;
  try {
    await mongoose
      .connect(dbUri, {
        useNewUrlParser: true,
        useUnidentifiedTechnology: true,
      })
      .then(() => {
        console.log("Connected to db");
      });
  } catch (e) {
    console.error(e);
  }
}
