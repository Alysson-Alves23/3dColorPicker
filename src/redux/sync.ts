import { AppDispatch } from "./store";
import { setCubeColor, setPosition, setRotation } from "./store";
import { setBackgroundColor } from "./store";
import { setLightIntensity } from "./store";
import { CubeRepository } from "../data/repository";

const cubeRepo = new CubeRepository();

export const fetchAllData = () => async (dispatch: AppDispatch) => {
    try {
        const  { color, position, rotation } = await cubeRepo.getCubeData();
        const  intensity = await cubeRepo.getLightIntensity();
        const backgroundColor = await cubeRepo.getBackgroundColor();

        dispatch(setCubeColor(color));
        dispatch(setPosition(position));
        dispatch(setRotation(rotation));
        dispatch(setLightIntensity(intensity));
        dispatch(setBackgroundColor(backgroundColor));

    } catch (error) {
        console.error("Erro ao buscar os dados iniciais:", error);
    }
};
