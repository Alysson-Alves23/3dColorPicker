import * as THREE from "three";
import { Cube } from "../core/Cube";
import { Light } from "../core/Light";

export class UIManager {
    private cube: Cube;
    private lightController: Light;
    private scene: THREE.Scene;

    constructor(cube: Cube, lightController: Light, scene: THREE.Scene) {
        this.cube = cube;
        this.lightController = lightController;
        this.scene = scene;
        this.initializeUI();
    }

    private initializeUI(): void {
        // Color pickers
        const cubeColorPicker = document.getElementById("cube-color") as HTMLInputElement;
        const backgroundColorPicker = document.getElementById("background-color") as HTMLInputElement;

        cubeColorPicker.addEventListener("input", () => this.updateCubeColor(cubeColorPicker.value));
        backgroundColorPicker.addEventListener("input", () => this.updateBackgroundColor(backgroundColorPicker.value));

        // Light intensity slider
        const lightIntensitySlider = document.getElementById("light-intensity") as HTMLInputElement;
        lightIntensitySlider.addEventListener("input", () => {
            const intensity = parseFloat(lightIntensitySlider.value);
            this.lightController.setIntensity(intensity);
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
}
