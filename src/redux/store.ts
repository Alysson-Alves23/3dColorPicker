import { configureStore} from "@reduxjs/toolkit";
import { persistenceMiddleware } from "./persist";
import {cubeSlice} from "./slices/CubeSlice";
import {backgroundSlice} from "./slices/BackgroundSlice";
import {lightSlice} from "./slices/LightSlice";




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
