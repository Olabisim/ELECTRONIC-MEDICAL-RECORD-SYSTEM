import Student from "../models/Student.js";

const getStudent = (req, res) => {

        try {
        
                
                res.status(200).json({
                        status: "success",
                        data: {
                                student: "student logged in home page",
                                // student: req.student,
                        },
                });

        }
        catch (err) {
                err.statusCode(400)
                err.status("user must be logged in")
        }
};

export { getStudent };
