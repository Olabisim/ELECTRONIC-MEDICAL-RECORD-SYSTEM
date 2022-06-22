import { createSlice } from "@reduxjs/toolkit";


interface inst {

        studentData: {

                surname: String,
                otherNames: String,
                matricNumber: String,
                yearOfAdmission: String,
                faculty: String,
                department:  String,
                religion: String,
                telPhone: String,
                date: Date,
                homeAddress: String,
                gender: String,
                dateOfBirth: Date,
                nationality: String,
                ethnicGroup: String,
                maritalStatus: String,
                guardianName: String,
                guardianOffAdd: String,
                guardianTelNum: String,
                guardianResAdd: String,
                guardianRel: String,
                userType: String,
                password: String,
        
                nervousDisease:  Boolean,
                chestLungsDisease: Boolean,
                heartDisease: Boolean,
                kidneyBladderDisease: Boolean,
                rheumaticDisease: Boolean,
                digestiveDisease: Boolean,
                otherDisease: Boolean,
                relativeTubDisease: Boolean,
                sexualDisease:  Boolean,
        }
        
        count: number;
}

const initialState: inst = {
        
        studentData : {

                surname: '',
                otherNames: '',
                matricNumber: '',
                yearOfAdmission: '',
                faculty: '',
                department:  '',
                religion: '',
                telPhone: '',
                date: new Date(),
                homeAddress: '',
                gender: '',
                dateOfBirth: new Date(),
                nationality: '',
                ethnicGroup: '',
                maritalStatus: '',

                guardianName: '',
                guardianOffAdd: '',
                guardianTelNum: '',
                guardianResAdd: '',
                guardianRel: '',
                userType: '',
                password: '',
        
                nervousDisease:  false,
                chestLungsDisease: false,
                heartDisease: false,
                kidneyBladderDisease: false,
                rheumaticDisease: false,
                digestiveDisease: false,
                otherDisease: false,
                relativeTubDisease: false,
                sexualDisease:  false,
        },

        count: 0
}


export const studentSlice = createSlice({

        name: "student",

        initialState,

        reducers: {
                incrementCount: (state, action) => {
                        state.count = state.count + 1;

                        state.studentData.surname = action.payload.surname;
                        state.studentData.otherNames = action.payload.otherNames;
                        state.studentData.yearOfAdmission = action.payload.yearOfAdmission;
                        state.studentData.faculty = action.payload.faculty;
                        state.studentData.department = action.payload.department;
                        state.studentData.religion = action.payload.religion;
                        state.studentData.telPhone = action.payload.telPhone;

                        state.studentData.homeAddress = action.payload.homeAddress;
                        state.studentData.gender = action.payload.gender;
                        // state.studentData.age = action.payload.age;
                        state.studentData.nationality = action.payload.nationality;
                        state.studentData.ethnicGroup = action.payload.ethnicGroup;
                        state.studentData.maritalStatus = action.payload.maritalStatus;

                        
                        state.studentData.guardianName = action.payload.guardianName;
                        state.studentData.guardianOffAdd = action.payload.guardianOffAdd;
                        state.studentData.guardianTelNum = action.payload.guardianTelNum;
                        state.studentData.guardianResAdd = action.payload.guardianResAdd;
                        state.studentData.guardianRel = action.payload.guardianRel;

                        // nameLG, relationshipLG, officeAddressLG, telephoneNoLG, residenceLG 
                        // {homeAddress, gender, age, nationality, ethnicGroup, maritalSatus, fatherTelNo, motherTelNo}
                        // if(action.payload.surname) {
                        // }
                        
                        // state.otherNames = action.payload.otherName;
                },
                decrementCount: (state) => {
                        state.count = state.count - 1;
                }
        }

})

export const {incrementCount, decrementCount} = studentSlice.actions;

export default studentSlice.reducer;