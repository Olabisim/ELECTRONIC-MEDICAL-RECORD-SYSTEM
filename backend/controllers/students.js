import Student from "../models/Student.js";

const getStudent = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      student: req.student,
    },
  });
};

export { getStudent };
