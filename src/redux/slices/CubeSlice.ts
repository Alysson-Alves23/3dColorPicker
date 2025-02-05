import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CubeState} from "../models/states";

const initialCubeState: CubeState = {
    color: "#ffffff",
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
};

export const cubeSlice = createSlice({
    name: "cube",
    initialState: initialCubeState,
    reducers: {
        setCubeColor: (state, action: PayloadAction<string>) => {
            state.color = action.payload;
        },
        setPosition: (state, action: PayloadAction<{ x: number; y: number; z: number }>) => {
            state.position = action.payload;
        },
        setRotation: (state, action: PayloadAction<{ x: number; y: number; z: number }>) => {
            state.rotation = action.payload;
        },
    },
});