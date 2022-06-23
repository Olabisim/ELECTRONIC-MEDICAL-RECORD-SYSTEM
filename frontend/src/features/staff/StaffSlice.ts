import { createSlice } from "@reduxjs/toolkit";


interface inst {

        staffData: {

                staffNo: String,
                surname: String,
                otherNames: String,
                religion: String,
                telPhone: String,
                date: Date,
                homeAddress: String,
                gender: String,
                dateOfBirth: Date,
                nationality: String,
                ethnicGroup: String,
                maritalStatus: String,
                department: String,
                userType: String,
                password: String,
        
        }
        
        count: number;
}

const initialState: inst = {
        
        staffData : {

                staffNo: '',
                surname: '',
                otherNames: '',
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

                userType: '',
                password: '',
        },

        count: 0
}


export const staffSlice = createSlice({

        name: "staff",

        initialState,

        reducers: {
                incrementCount: (state, action) => {
                        state.count = state.count + 1;

                        state.staffData.staffNo = action.payload.staffNo;
                        state.staffData.surname = action.payload.surname;
                        state.staffData.otherNames = action.payload.otherNames;
                        state.staffData.department = action.payload.department;
                        state.staffData.religion = action.payload.religion;
                        state.staffData.telPhone = action.payload.telPhone;

                        state.staffData.homeAddress = action.payload.homeAddress;
                        state.staffData.gender = action.payload.gender;
                        state.staffData.nationality = action.payload.nationality;
                        state.staffData.ethnicGroup = action.payload.ethnicGroup;
                        state.staffData.maritalStatus = action.payload.maritalStatus;

                        
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

export const {incrementCount, decrementCount} = staffSlice.actions;

export default staffSlice.reducer;