// persistenceMiddleware.ts
import { Middleware } from '@reduxjs/toolkit'
import { CubeRepository } from '../data/repository'

interface CubeState {
    position: { x: number; y: number; z: number }
    rotation: { x: number; y: number; z: number }
    color: string
}

interface BackgroundState {
    color: string
}

interface LightState {
    intensity: number
}

export interface RootState {
    cube: CubeState
    background: BackgroundState
    light: LightState
}

export const createPersistenceMiddleware = (cubeRepo: CubeRepository): Middleware<{}, RootState> => {
    return storeAPI => next => async (action :any) => {
        const result = next(action)
        const state = storeAPI.getState()
        switch (action.type) {
            case 'cube/setCubeColor':
                await cubeRepo.updateObjectColor(state.cube.color)
                break
            case 'light/setLightIntensity':
                await cubeRepo.updateLightIntensity(state.light.intensity)
                break
            case 'background/setBackgroundColor':
                await cubeRepo.updateBackgroundColor(state.background.color)
                break
            case 'cube/setCubePosition':
                await cubeRepo.updatePosition(state.cube.position)
                break
            case 'cube/setCubeRotation':
                await cubeRepo.updateRotation(state.cube.rotation)
                break
            default:
                break
        }
        return result
    }
}
