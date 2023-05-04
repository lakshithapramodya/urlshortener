import mongoose from "mongoose";
import shortUrl from "../models/shortUrl.js";

const schema = new mongoose.Schema(
  {
    shortUrl: {
      type: mongoose.Schema.ObjectId,

      required: true,
    },
  },
  { timestamps: true }
);

const analytics = mongoose.model("analytics", schema);

export default analytics;
