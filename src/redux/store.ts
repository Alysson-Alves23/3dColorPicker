// store.ts
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { createPersistenceMiddleware } from './persist'
import { CubeRepository } from '../data/repository'

const cubeSlice = createSlice({
    name: 'cube',
    initialState: {
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        color: '#ffffff',
    },
    reducers: {
        setCubeColor: (state, action) => {
            state.color = action.payload
        },
        setPosition: (state, action) => {
            state.position = action.payload
        },
        setRotation: (state, action) => {
            state.rotation = action.payload
        },
    },
})

const backgroundSlice = createSlice({
    name: 'background',
    initialState: {
        color: '#ffffff',
    },
    reducers: {
        setBackgroundColor: (state, action) => {
            state.color = action.payload
        },
    },
})

const lightSlice = createSlice({
    name: 'light',
    initialState: {
        intensity: 1,
    },
    reducers: {
        setLightIntensity: (state, action) => {
            state.intensity = action.payload
        },
    },
})

export const store = configureStore({
    reducer: {
        cube: cubeSlice.reducer,
        background: backgroundSlice.reducer,
        light: lightSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(createPersistenceMiddleware(new CubeRepository())),
})

export const { setCubeColor, setPosition, setRotation } = cubeSlice.actions
export const { setBackgroundColor } = backgroundSlice.actions
export const { setLightIntensity } = lightSlice.actions

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
