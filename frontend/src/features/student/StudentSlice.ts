import { createSlice } from "@reduxjs/toolkit";


interface inst {
        count: number;
}

const initialState: inst = {
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