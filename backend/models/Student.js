import mongoose from "mongoose";
const { Schema, model } = mongoose;
import bcryptjs from "bcryptjs";

const healtheHistorySchema = new Schema({
  nervousDisease: {
    type: Boolean,
    default: false,
  },
  chestLungsDisease: {
    type: Boolean,
    default: false,
  },
  heartDisease: {
    type: Boolean,
    default: false,
  },
  kidneyBladderDisease: {
    type: Boolean,
    default: false,
  },
  rheumaticDisease: {
    type: Boolean,
    default: false,
  },
  digestiveDisease: {
    type: Boolean,
    default: false,
  },
  otherDisease: {
    type: Boolean,
    default: false,
  },
  relativeTubDisease: {
    type: Boolean,
    default: false,
  },
  sexualDisease: {
    type: Boolean,
    default: false,
  },
});

const studentSchema = new Schema({
  surname: {
    type: String,
    required: [true, "Provide all required information"],
    trim: true,
  },
  otherNames: {
    type: String,
    required: [true, "Provide all required information"],
    trim: true,
  },
  matricNumber: {
    type: String,
    required: [true, "Provide all required information"],
    unique: [true, "This matric number is already registered  "],
  },
  yearOfAdmission: {
    type: String,
    required: [true, "Provide all required information"],
  },
  faculty: {
    type: String,
    required: [true, "Provide all required information"],
  },
  department: {
    type: String,
    required: [true, "Provide all required information"],
  },
  religion: {
    type: String,
    required: [true, "Provide all required information"],
  },
  telPhone: {
    type: "String",
    required: [true, "Provide all required information"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  homeAddress: {
    type: String,
    required: [true, "Provide all required information"],
    trim: true,
  },
  gender: {
    type: String,
    required: [true, "Provide all required information"],
  },
  dateOfBirth: {
    type: Date,
    required: [true, "Provide all required information"],
  },
  nationality: {
    type: String,
    required: [true, "Provide all required information"],
  },
  ethnicGroup: {
    type: String,
    required: [true, "Provide all required information"],
  },
  maritalStatus: {
    type: String,
    required: [true, "Provide all required information"],
  },
  guardianName: {
    type: String,
    required: [true, "Provide all required information"],
    trim: true,
  },
  guardianOffAdd: {
    type: String,
    required: [true, "Provide all required information"],
    trim: true,
  },
  guardianTelNum: {
    type: String,
    required: [true, "Provide all required information"],
  },
  guardianResAdd: {
    type: String,
    required: [true, "Provide all required information"],
    trim: true,
  },
  guardianRel: {
    type: String,
    required: [true, "Provide all required information"],
    trim: true,
  },
  userType: {
    type: String,
    enum: {
      values: ["student"],
      message: "User has to be a student",
    },
    default: "student",
  },
  password: {
    type: String,
    required: [true, "Enter Password"],
    minlength: [8, "Password must be atleast 8 characters long"],
    select: false,
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  healthHistory: healtheHistorySchema,
});

// pre-save document middleware
studentSchema.pre("save", async function (next) {
  // if password was updated
  if (!this.isModified("password")) return next();

  // hash password with salt round of 12
  this.password = await bcryptjs.hash(this.password, 12);

  // deleting passwordConfirm by setting to undefined
  this.passwordConfirm = undefined;
});

studentSchema.methods.comparePasswords = async function (
  inputPassword,
  studentPassword
) {
  return await bcryptjs.compare(inputPassword, studentPassword);
};

const Student = new mongoose.model("Student", studentSchema);

export default Student;
