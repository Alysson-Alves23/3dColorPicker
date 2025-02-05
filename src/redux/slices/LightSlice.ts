import {LightState} from "../models/states";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialLightState: LightState = {
    intensity: 1,
};

export const lightSlice = createSlice({
    name: "light",
    initialState: initialLightState,
    reducers: {
        setLightIntensity: (state, action: PayloadAction<number>) => {
            state.intensity = action.payload;
        },
    },
});

