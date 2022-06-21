import { createSlice } from "@reduxjs/toolkit";


interface inst {

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
        
        count: number;
}

const initialState: inst = {
        
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
        
        count: 0
}


export const studentSlice = createSlice({

        name: "student",

        initialState,

        reducers: {
                incrementCount: (state) => {
                        state.count = state.count + 1;
                },
                decrementCount: (state) => {
                        state.count = state.count - 1;
                }
        }

})

export const {incrementCount, decrementCount} = studentSlice.actions;

export default studentSlice.reducer;