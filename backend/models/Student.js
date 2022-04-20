// STUDENT'S DATA

// surname
// other names
// year of admission
// faculty
// department
// religion
// date
// Home Address
// sex
// Date Of Virth
// Age
// nationality
// ethnic group
// marital status

// father details
// name
// office address
// father's tel. No.:
// Home address
// Mother's Tel No.:

// LOCAL GUARDIAN
// name
// relationship
// office address
// tel no
// residence

import mongoose from "mongoose";
const { Schema, model } = mongoose;

const studentSchema = new Schema({
  surname: {
    type: String,
    required: [true, "Every student must have a name"],
    trim: true,
  },
  otherNames: {
    type: String,
    required: [true, "Every student must have name"],
    trim: true,
  },
  yearOfAdmission: {
    type: String,
    required: [true, "Year of admission is a required field"],
  },
  faculty: {
    type: String,
    required: [true, "Faculty field is required"],
  },
  department: {
    type: String,
    required: [true, "Faculty field is required"],
  },
  religion: {
    type: String,
    required: true,
  },
  date: {
    type: Date.now(),
  },
  homeAddress: {
    tyoe: String,
    required: true,
    trim: true,
  },
  sex: {
    type: String,
    required: [true, "A student has to have a gender"],
  },
  dateOfBirth: {
    type: Date,
    required: [true, "DOB is a required field"],
  },
  nationality: {
    type: String,
    required: [true, "Nationality is a required field"],
  },
  ethnicGroup: {
    type: String,
    required: [true, "Ethnicity is a required field"],
  },
  maritalStatus: {
    type: String,
    required: [true, "Marital status is a required field"],
  },
  guardianName: {
    type: String,
    required: [true, "Guardian name is a required field"],
    trim: true,
  },
  guardianOffAdd: {
    type: String,
    required: [true, "Guardian office address is a required field"],
    trim: true,
  },
  guardianTelNum: {
    type: String,
    required: [true, "Guardian telephone number is a required field"],
  },
  guardianResAdd: {
    type: String,
    required: [true, "Guardian residence address is a required field"],
    trim: true,
  },
  guardianRel: {
    type: String,
    required: [true, "Guardian relationship is a required field"],
    trim: true,
  },
});

export default model("Student", studentSchema);
