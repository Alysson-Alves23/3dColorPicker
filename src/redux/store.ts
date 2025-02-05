import { configureStore, createSlice } from '@reduxjs/toolkit';

const cubeSlice = createSlice({
    name: 'cube',
    initialState: {
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        color:"#ffffff",
    },
    reducers: {
        setCubeColor: (state, action) => {
            state.color = action.payload;
        },
        setPosition: (state, action) => {
            state.position = action.payload;
        },
        setRotation: (state, action) => {
            state.rotation = action.payload;
        },
    },
});

export const { setPosition, setRotation } = cubeSlice.actions;

const backgroundSlice = createSlice({
    name: 'background',
    initialState: {
        color: '#ffffff',
    },
    reducers: {
        setBackgroundColor: (state, action) => {
            state.color = action.payload;
        },
    },
});


const lightSlice = createSlice({
    name: 'light',
    initialState: {
        intensity: 1,
    },
    reducers: {
        setLightIntensity: (state, action) => {
            state.intensity = action.payload;
        },
    },
});

export const store = configureStore({
    reducer: {
        cube: cubeSlice.reducer,
        background: backgroundSlice.reducer,
        light: lightSlice.reducer,
    },
});

export const { setCubeColor } = cubeSlice.actions;
export const { setBackgroundColor } = backgroundSlice.actions;
export const { setLightIntensity } = lightSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
