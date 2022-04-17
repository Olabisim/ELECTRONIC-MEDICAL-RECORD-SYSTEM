import { createSlice } from "@reduxjs/toolkit";


interface inst {
        value: number;
}

const initialState: inst = {
        value: 3
}


export const studentSlice = createSlice({

        name: "student",

        initialState,

        reducers: {
                
        }


})