import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: "./config.env",
});

const app = express();

app.get("/", (req, res) => {
  res.send("this is the home page");
});

export default app;
