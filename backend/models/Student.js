import mongoose from "mongoose";
const { Schema, model } = mongoose;
import bcrypt from "bcryptjs";

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
    unique: true,
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
      values: ["student", "adminUser", "admin"],
      message: "User has to either be a student, adminUser or an admin",
    },
    default: "student",
  },
  password: {
    type: String,
    required: [true, "Enter Password"],
    minlength: [8, "Password must be atleast 8 characters long"],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Enter password again to confirm"],
    validate: {
      validator: function (cPassword) {
        return cPassword == this.password;
      },
      message: "Passwords doesn't match",
    },
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

// pre-save document middleware
studentSchema.pre("save", async function (next) {
  // if password was updated
  if (!this.isModified("password")) return next();

  // hash password with salt round of 12
  this.password = await bcrypt.hash(this.password, 12);

  // deleting passwordConfirm by setting to undefined
  this.passwordConfirm = undefined;
});

export default model("Student", studentSchema);
