import express from "express";
const router = express.Router();

import { getStudent } from "../controllers/students.js";

import {
  studentLogin,
  protectStudent,
  studentSignup,
} from "../controllers/authentication.js";


router.post("/signup", studentSignup);
router.post("/login", studentLogin);
router.get("/", protectStudent, getStudent);

export default router;
