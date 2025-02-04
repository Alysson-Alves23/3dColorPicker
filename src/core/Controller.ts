import { Cube } from "./Cube";
import { InputHandler } from "../utils/InputHandler";

export class Controller {
    private cube: Cube;
    private inputHandler: InputHandler;
    private scrollDelta: number = 0;

    constructor(cube: Cube, inputHandler: InputHandler) {
        this.cube = cube;
        this.inputHandler = inputHandler;
        window.addEventListener('wheel', this.onScroll.bind(this));
    }

    update(): void {
        this.handleRotation();
        this.handleMovement();
    }

    private handleRotation(): void {
        const mouseDelta = this.inputHandler.getMouseDelta();
        if (mouseDelta.x !== 0 || mouseDelta.y !== 0) {
            const rotationSpeed = 0.01;
            this.cube.setRotation(
                this.cube.getObject().rotation.x + mouseDelta.y * rotationSpeed,
                this.cube.getObject().rotation.y + mouseDelta.x * rotationSpeed,
                0
            );
        }
    }

    private handleMovement(): void {
        const direction = this.inputHandler.getMovementDirection();
        const moveSpeed = 0.1;
        let x = this.cube.getObject().position.x;
        let y = this.cube.getObject().position.y;
        let z = this.cube.getObject().position.z;

        // Movimentação no eixo Y (cima e baixo) usando teclas W/S ou ArrowUp/ArrowDown
        if (direction.forward) y += moveSpeed;
        if (direction.backward) y -= moveSpeed;

        // Movimentação no eixo X (esquerda/direita) usando teclas A/D ou ArrowLeft/ArrowRight
        if (direction.left) x -= moveSpeed;
        if (direction.right) x += moveSpeed;

        // Movimentação no eixo Z usando scroll do mouse
        z += this.scrollDelta * 0.1;
        this.scrollDelta = 0; // Reset após aplicar o movimento

        this.cube.setPosition(x, y, z);
    }

    private onScroll(event: WheelEvent): void {
        this.scrollDelta = event.deltaY > 0 ? 1 : -1;
    }
}
