import express from "express";
import dotenv from "dotenv";

import studentRoutes from "./routes/students.js";

dotenv.config({
  path: "./config.env",
});

const app = express();

app.use(studentRoutes);

export default app;
