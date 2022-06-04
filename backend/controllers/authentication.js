import jwt from "jsonwebtoken";

import Student from "../models/Student.js";

const studentSignup = async (req, res) => {
  try {
    // pick student reg data data body
    const student = await Student.create({
      surname: req.body.surname,
      otherNames: req.body.otherNames,
      yearOfAdmission: req.body.yearOfAdmission,
      faculty: req.body.faculty,
      department: req.body.department,
      religion: req.body.religion,
      telPhone: req.body.telPhone,
      date: req.body.date,
      homeAddress: req.body.homeAddress,
      gender: req.body.gender,
      dateOfBirth: req.body.dateOfBirth,
      nationality: req.body.nationality,
      ethnicGroup: req.body.ethnicGroup,
      maritalStatus: req.body.maritalStatus,
      guardianName: req.body.guardianName,
      guardianOffAdd: req.body.guardianOffAdd,
      guardianTelNum: req.body.guardianTelNum,
      guardianResAdd: req.body.guardianResAdd,
      guardianRel: req.body.guardianRel,
      matricNumber: req.body.matricNumber,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    //sign token
    const token = jwt.sign({ id: student.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    // send token in cookie
    res.cookie("jwt", token, {
      expiresIn: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
    });

    // hide password from response
    student.password = undefined;

    res.status(201).json({
      status: "success",
      message: "student successfully registered",
      data: {
        student,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

const studentLogin = async (req, res, next) => {
  try {
    const { matricNumber, password } = req.body;

    // matric no and password passed in?
    if (!matricNumber || !password) {
      const err = new Error("Fill matric number and password");
      err.statusCode = 400;
      err.status = "failed";

      next(err);
    }

    // get student with matric numeber and also making password accessible since we made the select property false on the model definition
    const student = await Student.findOne({
      matricNumber,
    }).select("+password");

    // no student with the matric number or inputted password not matching with student confirmed password
    if (
      !student ||
      !(await student.comparePasswords(password, student.password))
    ) {
      const err = new Error("Incorrect matric number or password");
      err.statusCode = 400;
      err.status = "failed";

      next(err);
    }

    const token = jwt.sign({ id: student.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.cookie("jwt", token, {
      expiresIn: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
    });

    res.status(200).json({
      status: "success",
      token,
      data: {
        student,
      },
    });
  } catch (err) {
    err.statusCode = 400;
    err.status = "failed";

    next(err);
  }
};

export { studentSignup, studentLogin };
