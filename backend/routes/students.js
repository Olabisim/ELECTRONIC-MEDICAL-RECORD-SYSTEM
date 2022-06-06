import express from "express";
const router = express.Router();

import Student from "../models/Student.js";
import Staff from "../models/Staff.js";

import { getStudent } from "../controllers/students.js";

import {
  studentSignup,
  studentLogin,
  protect,
  signup,
} from "../controllers/authentication.js";

router.post("/signup", signup(Student));
router.post("/login", studentLogin);
router.get("/", protect(Student), getStudent);

export default router;
