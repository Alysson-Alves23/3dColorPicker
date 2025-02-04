import { Render } from "./core/Render";
import { Cube } from "./core/Cube";
import { InputHandler } from "./utils/InputHandler";
import { Controller } from "./core/Controller";
import {Light} from "./core/Light";
import {UIManager} from "./ui/UIManager";

document.addEventListener('DOMContentLoaded', () => {
    const render = new Render();
    const cube = new Cube();
    const light = new Light();
    const inputHandler = new InputHandler();
    const controller = new Controller(cube, inputHandler);
    new UIManager(cube,light,render.getScene());
    render.getScene().add(light.getLight());
    render.getScene().add(cube.getObject());

    const animate = () => {
        controller.update();
        render.render();
        requestAnimationFrame(animate);
    };

    animate();
});
