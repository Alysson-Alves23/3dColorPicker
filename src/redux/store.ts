import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistenceMiddleware } from "./persist";

export interface CubeState {
    color: string;
    position: { x: number; y: number; z: number };
    rotation: { x: number; y: number; z: number };
}

export interface LightState {
    intensity: number;
}

export interface BackgroundState {
    color: string;
}

const initialCubeState: CubeState = {
    color: "#ffffff",
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
};

const initialLightState: LightState = {
    intensity: 1,
};

const initialBackgroundState: BackgroundState = {
    color: "#ff0000",
};

const cubeSlice = createSlice({
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

const lightSlice = createSlice({
    name: "light",
    initialState: initialLightState,
    reducers: {
        setLightIntensity: (state, action: PayloadAction<number>) => {
            state.intensity = action.payload;
        },
    },
});

const backgroundSlice = createSlice({
    name: "background",
    initialState: initialBackgroundState,
    reducers: {
        setBackgroundColor: (state, action: PayloadAction<string>) => {
            state.color = action.payload;
        },
    },
});

export const store = configureStore({
    reducer: {
        cube: cubeSlice.reducer,
        light: lightSlice.reducer,
        background: backgroundSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistenceMiddleware),
});


export const { setCubeColor, setPosition, setRotation } = cubeSlice.actions;
export const { setLightIntensity } = lightSlice.actions;
export const { setBackgroundColor } = backgroundSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
