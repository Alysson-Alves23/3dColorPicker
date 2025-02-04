import * as THREE from 'three';
import {Cube} from "./Cube";
import {Render} from "./Render";

export class Controller {
    private cube: Cube;
    private camera: THREE.Camera;
    private scene: THREE.Scene;
    private isDragging: boolean = false;
    private previousMousePosition: { x: number; y: number } = { x: 0, y: 0 };
    private raycaster: THREE.Raycaster;

    constructor(cube: Cube, render:Render) {
        this.cube = cube;
        this.scene = render.getScene();
        this.camera = render.getCamera();
        this.raycaster = new THREE.Raycaster();
        this.addEventListeners();
    }

    private addEventListeners() {
        window.addEventListener('mousedown', this.onMouseDown.bind(this), false);
        window.addEventListener('mousemove', this.onMouseMove.bind(this), false);
        window.addEventListener('mouseup', this.onMouseUp.bind(this), false);
    }

    private onMouseDown(event: MouseEvent) {

        const mouse = new THREE.Vector2(
            (event.clientX / window.innerWidth) * 2 - 1,
            -(event.clientY / window.innerHeight) * 2 + 1
        );


        this.raycaster.setFromCamera(mouse, this.camera);

        const intersects = this.raycaster.intersectObject(this.cube.getObject());
        if (intersects.length > 0) {
            this.isDragging = true;
            this.previousMousePosition = { x: event.clientX, y: event.clientY };
        }
    }

    private onMouseMove(event: MouseEvent) {
        if (!this.isDragging) return;


        const deltaMove = {
            x: event.clientX - this.previousMousePosition.x,
            y: event.clientY - this.previousMousePosition.y,
        };


        const deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(
            new THREE.Euler(0, deltaMove.x * 0.01, 0, 'XYZ')
        );
        this.cube.getObject().quaternion.multiplyQuaternions(deltaRotationQuaternion, this.cube.getObject().quaternion);

        this.previousMousePosition = { x: event.clientX, y: event.clientY };
    }

    private onMouseUp(_event: MouseEvent) {
        this.isDragging = false;
    }
}
