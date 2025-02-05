import { createAsyncThunk } from '@reduxjs/toolkit';
import {setBackgroundColor, setCubeColor, setLightIntensity, setPosition, setRotation} from './store';
import {CubeRepository} from "../data/repository";


const cubeRepository = new CubeRepository();



export const fetchCubeColor = createAsyncThunk('cube/fetchColor',
    async (_, thunkAPI) => {
    try {
        const color = await cubeRepository.getObjectColor();
        thunkAPI.dispatch(setCubeColor(color));
    } catch (error) {
        console.error('Failed to fetch cube color:', error);
    }
});


export const fetchBackgroundColor = createAsyncThunk('background/fetchColor'
    , async (_, thunkAPI) => {
    try {
        const color = await cubeRepository.getBackgroundColor();
        thunkAPI.dispatch(setBackgroundColor(color));
    } catch (error) {
        console.error('Failed to fetch background color:', error);
    }
});


export const fetchLightIntensity = createAsyncThunk('light/fetchIntensity'
    , async (_, thunkAPI) => {
    try {
        const intensity = await cubeRepository.getLightIntensity();
        thunkAPI.dispatch(setLightIntensity(intensity));
    } catch (error) {
        console.error('Failed to fetch light intensity:', error);
    }
});

export const fetchCubePosition = createAsyncThunk('cube/fetchPosition'
    , async (_, thunkAPI) => {
    try {
        const position = await cubeRepository.getPosition();
        thunkAPI.dispatch(setPosition(position));
    } catch (error) {
        console.error('Failed to fetch cube position:', error);
    }
});

export const fetchCubeRotation = createAsyncThunk('cube/fetchRotation'
    , async (_, thunkAPI) => {
    try {
        const rotation = await cubeRepository.getRotation();
        thunkAPI.dispatch(setRotation(rotation));
    } catch (error) {
        console.error('Failed to fetch cube rotation:', error);
    }
});
