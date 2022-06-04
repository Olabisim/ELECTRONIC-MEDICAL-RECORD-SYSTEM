import express from "express";
const router = express.Router();

import {
  getStudents,
  createStudent,
  getStudent,
  updatedStudent,
  deleteStudent,
} from "../controllers/students.js";

import { studentSignup, studentLogin } from "../controllers/authentication.js";

router.post("/signup", studentSignup);
router.post("/login", studentLogin);

router
  .route("/:id")
  .get(getStudent)
  .patch(updatedStudent)
  .delete(deleteStudent);

export default router;
