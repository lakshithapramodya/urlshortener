import mongoose from "mongoose";
import shortid from "shortid";

const schema = new mongoose.Schema({
  user: {
    type: String,
  },
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: shortid.generate,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

const shortUrl = mongoose.model("ShortUrl", schema);

export default shortUrl;
