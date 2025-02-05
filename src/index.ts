import { Render } from "./core/Render";
import { Cube } from "./core/Cube";

import { Controller } from "./core/Controller";
import {Light} from "./core/Light";
import {UIManager} from "./ui/UIManager";
import {store} from "./redux/store";
import {
    fetchBackgroundColor,
    fetchCubeColor,
    fetchCubePosition,
    fetchCubeRotation,
    fetchLightIntensity
} from "./redux/sync";

document.addEventListener('DOMContentLoaded', () => {
    const render = new Render();
    const cube = new Cube();
    const light = new Light();
    new Controller(cube,render);
    new UIManager(cube,light,render.getScene());
    render.getScene().add(light.getLight());
    render.getScene().add(cube.getObject());
    store.dispatch(fetchCubeColor());
    store.dispatch(fetchBackgroundColor());
    store.dispatch(fetchLightIntensity());
    store.dispatch(fetchCubePosition());
    store.dispatch(fetchCubeRotation());
    const animate = () => {

        render.render();
        requestAnimationFrame(animate);
    };

    animate();
});
