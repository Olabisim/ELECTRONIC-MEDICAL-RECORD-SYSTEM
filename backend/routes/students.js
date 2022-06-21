import express from "express";
const router = express.Router();

import { getStudent } from "../controllers/students.js";

import {
  studentLogin,
<<<<<<< HEAD
  protect,
  studentLogout
=======
  protectStudent,
  studentSignup,
>>>>>>> 55ea4ef1508a693b06cdf5450d118fe4e4ca2171
} from "../controllers/authentication.js";


const message = () => {
  console.log("home page")
}



router.post("/signup", studentSignup);
router.post("/login", studentLogin);
<<<<<<< HEAD
router.get("/", protect, getStudent);
router.get("/logout", protect, studentLogout);
router.get("/home", (req, res) => console.log("student home page"));
=======
router.get("/", protectStudent, getStudent);
>>>>>>> 55ea4ef1508a693b06cdf5450d118fe4e4ca2171

export default router;
