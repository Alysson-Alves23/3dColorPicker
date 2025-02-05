import * as THREE from "three";
import { Cube } from "../core/Cube";
import { Light } from "../core/Light";
import { store } from "../redux/store";
import { setCubeColor, setBackgroundColor, setLightIntensity } from "../redux/store";

export class UIManager {
    private cube: Cube;
    private lightController: Light;
    private scene: THREE.Scene;

    constructor(cube: Cube, lightController: Light, scene: THREE.Scene) {
        this.cube = cube;
        this.lightController = lightController;
        this.scene = scene;
        this.initializeUI();
        this.syncUIWithState();
        this.subscribeToStore();
    }

    private initializeUI(): void {
        const cubeColorPicker = document.getElementById("cube-color") as HTMLInputElement;
        const backgroundColorPicker = document.getElementById("background-color") as HTMLInputElement;
        const lightIntensitySlider = document.getElementById("light-intensity") as HTMLInputElement;

        cubeColorPicker.addEventListener("input", () => {
            const color = cubeColorPicker.value;
            store.dispatch(setCubeColor(color)); // Atualiza o estado global
        });

        backgroundColorPicker.addEventListener("input", () => {
            const color = backgroundColorPicker.value;
            store.dispatch(setBackgroundColor(color)); // Atualiza o estado global
        });

        lightIntensitySlider.addEventListener("input", () => {
            const intensity = parseFloat(lightIntensitySlider.value);
            store.dispatch(setLightIntensity(intensity)); // Atualiza o estado global
        });
    }

    private updateCubeColor(color: string): void {
        const hexColor = new THREE.Color(color);
        this.cube.setColor(hexColor.getHex());
    }

    private updateBackgroundColor(color: string): void {
        const hexColor = new THREE.Color(color);
        this.scene.background = hexColor;
    }
    private syncUIWithState(): void {
        const state = store.getState();

        const cubeColorPicker = document.getElementById("cube-color") as HTMLInputElement | null;
        const backgroundColorPicker = document.getElementById("background-color") as HTMLInputElement | null;
        const lightIntensitySlider = document.getElementById("light-intensity") as HTMLInputElement | null;
        const cubeColorBox = document.getElementById("cube-color-box") as HTMLDivElement | null;
        const backgroundColorBox = document.getElementById("background-color-box") as HTMLDivElement | null;

        if (cubeColorPicker) cubeColorPicker.value = state.cube.color;
        if (backgroundColorPicker) backgroundColorPicker.value = state.background.color;
        if (lightIntensitySlider) lightIntensitySlider.value = state.light.intensity.toString();

        if (cubeColorBox) cubeColorBox.style.backgroundColor = state.cube.color;
        if (backgroundColorBox) backgroundColorBox.style.backgroundColor = state.background.color;

        this.updateCubeColor(state.cube.color);
        this.updateBackgroundColor(state.background.color);
        this.lightController.setIntensity(state.light.intensity);
    }

    private subscribeToStore(): void {
        let previousState = store.getState();

        store.subscribe(() => {
            const currentState = store.getState();

            const cubeColorBox = document.getElementById("cube-color-box") as HTMLDivElement | null;
            const backgroundColorBox = document.getElementById("background-color-box") as HTMLDivElement | null;

            if (previousState.cube.color !== currentState.cube.color) {
                this.updateCubeColor(currentState.cube.color);
                if (cubeColorBox) cubeColorBox.style.backgroundColor = currentState.cube.color;
            }

            if (previousState.background.color !== currentState.background.color) {
                this.updateBackgroundColor(currentState.background.color);
                if (backgroundColorBox) backgroundColorBox.style.backgroundColor = currentState.background.color;
            }

            if (previousState.light.intensity !== currentState.light.intensity) {
                this.lightController.setIntensity(currentState.light.intensity);
            }

            previousState = currentState;
        });
    }


}
