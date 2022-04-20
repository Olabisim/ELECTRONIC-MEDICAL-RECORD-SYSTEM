import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import fs from "fs";

import mongoose from "mongoose";
import dotenv from "dotenv";

import Student from "../models/Student.js";

dotenv.config({
  path: "../config.env",
});

mongoose
  .connect(process.env.DATABASE)
  .then((connection) => console.log("ready for dev files"))
  .catch((err) => {
    console.log(err);
  });

// reading dev Student data from file
const unparsedStudents = fs.readFileSync(`${__dirname}/students.json`);
const students = JSON.parse(unparsedStudents);
console.log(students);

// import read files to db
const importData = async () => {
  try {
    await Student.create(students);
    console.log("Data sucessfully imported");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// delete all existing data in the database
const deleteDbData = async () => {
  try {
    await Student.deleteMany();
    console.log("Data sucessfully deleted");
  } catch (err) {}
  process.exit();
};

if (process.argv[2] == "--import") {
  importData();
} else if (process.argv[2] == "--delete") {
  deleteDbData();
}

// console.log(process.argv);
