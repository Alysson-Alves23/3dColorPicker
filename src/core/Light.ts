import * as THREE from "three";

export class Light {
    private light: THREE.DirectionalLight;

    constructor() {
        this.light = new THREE.DirectionalLight(0xffffff, 1);
        this.light.position.set(5, 5, 5);
    }

    setIntensity(intensity: number): void {
        this.light.intensity = intensity;
    }
    setPosition(x: number, y: number, z: number): void {
        this.light.position.set(x, y, z);
    }

    getLight(): THREE.DirectionalLight {
        return this.light;
    }
}
