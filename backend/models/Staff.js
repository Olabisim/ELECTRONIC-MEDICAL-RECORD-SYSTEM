import mongoose from "mongoose";
const { Schema, model } = mongoose;

const staffSchema = new Schema({
  staff_no: {
    type: String,
    unique: [true, "No two staff can have the same id"],
  },
  surname: {
    type: String,
    require: [true, "Please provide a surname"],
  },
  other_names: {
    type: Array,
    require: [true, "Please provide other names"],
  },
  dob: {
    type: Date,
    require: [true, "Provide date of birth"],
  },
  married: {
    type: Boolean,
    require: [true, "Provide marital status"],
  },
  occupation: {
    type: String,
    require: [true, "Provide occupation"],
  },
  department: {
    type: String,
    require: [true, "Please provide a department"],
  },
  sex: {
    type: String,
    require: [true, "Please provide a surname"],
    enum: ["male", "female"],
  },
  nationality: {
    type: String,
    default: "Nigerian",
    require: [true, "Please provide nationality"],
  },
});

const Staff = model("Staff", staffSchema);

export default Staff;
