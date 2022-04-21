import express from "express";
const router = express.Router();

import {
  getStudents,
  createStudent,
  getStudent,
  updatedStudent,
  deleteStudent,
} from "../controllers/students.js";

router.route("/").get(getStudents).post(createStudent);
router
  .route("/:id")
  .get(getStudent)
  .patch(updatedStudent)
  .delete(deleteStudent);

export default router;
