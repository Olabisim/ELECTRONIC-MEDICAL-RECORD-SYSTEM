import express from "express";
const router = express.Router();

import { getStudent } from "../controllers/students.js";

import {
  studentSignup,
  studentLogin,
  protect,
  studentLogout
} from "../controllers/authentication.js";


const message = () => {
  console.log("home page")
}



router.post("/signup", studentSignup);
router.post("/login", studentLogin);
router.get("/", protect, getStudent);
router.get("/logout", protect, studentLogout);
router.get("/home", (req, res) => console.log("student home page"));

export default router;
