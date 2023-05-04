import express from "express";

const app = express();

app.listen(5000, () =>
  console.log("Application listening at http://localhost:5000")
);
