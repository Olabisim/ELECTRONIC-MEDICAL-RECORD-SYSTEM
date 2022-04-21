import express from "express";
const router = express.Router();

import { getStudents, createStudent } from "../controllers/students.js";

router.route("/").get(getStudents).post(createStudent);

export default router;
