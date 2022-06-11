import express from "express";
const router = express.Router();

import { getStudent } from "../controllers/students.js";

import {
  studentSignup,
  studentLogin,
  protect,
} from "../controllers/authentication.js";

router.post("/signup", studentSignup);
router.post("/login", studentLogin);
router.get("/", protect, getStudent);

export default router;
