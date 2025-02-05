import {BackgroundState} from "../models/states";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialBackgroundState: BackgroundState = {
    color: "#ff0000",
};

export const backgroundSlice = createSlice({
    name: "background",
    initialState: initialBackgroundState,
    reducers: {
        setBackgroundColor: (state, action: PayloadAction<string>) => {
            state.color = action.payload;
        },
    },
});