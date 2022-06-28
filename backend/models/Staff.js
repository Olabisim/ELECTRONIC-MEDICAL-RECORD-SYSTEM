import mongoose from "mongoose";
const { Schema, model } = mongoose;
import bcryptjs from "bcryptjs";

const staffSchema = new Schema({
  staffNo: {
    type: String,
    required: true,
    unique: true,
  },
  surname: {
    type: String,
    required: [true, "Please provide a surname"],
  },
  otherNames: {
    type: String,
    required: [true, "Please provide other names"],
  },
  dateOfBirth: {
    type: Date,
    required: [true, "Provide date of birth"],
  },
  maritalStatus: {
    type: String,
    enum: {
      values: ["married", "single", "divorced"],
      message: "please enter either married, single or divorced",
    },
    required: [true, "Provide marital status"],
  },
  department: {
    type: String,
    required: [true, "Please provide a department"],
  },
  gender: {
    type: String,
    required: [true, "Please provide a surname"],
    enum: {
      values: ["male", "female"],
      message: "only male and female allowed",
    },
  },
  nationality: {
    type: String,
    default: "Nigerian",
    required: [true, "Please provide nationality"],
  },
  homeAddress: {
    type: String,
    required: [true, "Provide home address"],
  },
  telPhone: {
    type: String,
    required: [true, "Provide telephone number"],
  },
  religion: {
    type: String,
    required: [true, "Provide you religion"],
  },
  ethnicGroup: {
    type: String,
    required: [true, "Provide your ethnic group"],
  },
  password: {
    type: String,
    required: [true, "Enter password"],
    select: false,
    minlength: [8, "password must be atleast 8 characters long"],
  },
  value: {
    type: Number
  },
  // passwordConfirm: {
  //   type: String,
  //   required: [true, "Enter password again to confirm"],
  //   validate: {
  //     validator: function (cPassword) {
  //       return cPassword == this.password;
  //     },
  //     message: "Passwords don't match",
  //   },
  // },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  status : {
    type: String,
  }
  // userType: {
  //   type: String,
  //   enum: {
  //     values: ["staff"],
  //     message: "User has to be a staff",
  //   },
  //   default: "staff",
  // },
});

// encrypt pword pre-save middleeware
staffSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcryptjs.hash(this.password, 12);

  this.passwordConfirm = undefined;
});

// comparepassword instance
staffSchema.methods.comparePasswords = async function (
  inputPassword,
  staffPassword
) {
  return await bcryptjs.compare(inputPassword, staffPassword);
};

const Staff = model("Staff", staffSchema);

export default Staff;
