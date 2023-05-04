import mongoose from "mongoose";
import shortUrl from "../models/shortUrl.js";

const schema = new mongoose.Schema({
    shortUrl: {
        type: mongoose.Schema.ObjectId,
        ref:"shortUrl",
        required: true
    },
    {timestamps: true}
})