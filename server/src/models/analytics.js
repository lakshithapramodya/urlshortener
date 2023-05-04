import mongoose from "mongoose";

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
