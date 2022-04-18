import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("this is the home page");
});

export default app;
