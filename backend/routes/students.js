import express from "express";
const router = express.Router();

import { getStudents } from "../controllers/students.js";

router.get("/api/v1/students", getStudents);

export default router;
