import { Middleware } from "@reduxjs/toolkit";
import { CubeRepository } from "../data/repository";
import { BackgroundState, CubeState, LightState } from "./models/states";

export interface RootState {
    cube: CubeState;
    background: BackgroundState;
    light: LightState;
}

const cubeRepo = new CubeRepository();

export const persistenceMiddleware: Middleware<{}, RootState> =
    (store) => (next) => async (action: any) => {
        const result = next(action);
        const state = store.getState();

        try {
            switch (action.type) {
                case "cube/setCubeColor":
                case "cube/setPosition":
                case "cube/setRotation":
                    await cubeRepo.updateCubeData({
                        color: state.cube.color,
                        position: state.cube.position,
                        rotation: state.cube.rotation,
                    });
                    break;

                case "background/setBackgroundColor":
                    await cubeRepo.updateBackgroundColor( state.background.color );
                    break;

                case "light/setLightIntensity":
                    await cubeRepo.updateLightIntensity(state.light.intensity );
                    break;
            }
        } catch (error) {
            console.error("Erro ao persistir dados no backend:", error);
        }

        return result;
    };
