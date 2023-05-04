import config from "../config/defaults.js";
import mongoose from "mongoose";

export default async function db() {
  const dbUrl = config.dbUrl;
  try {
    await mongoose
      .connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to db");
      });
  } catch (e) {
    console.error(e);
  }
}
