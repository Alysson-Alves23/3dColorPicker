import { Render } from "./core/Render";
import { Cube } from "./core/Cube";

import { Controller } from "./core/Controller";
import {Light} from "./core/Light";
import {UIManager} from "./ui/UIManager";
import {store} from "./redux/store";
import { fetchAllData } from "./redux/sync"

document.addEventListener('DOMContentLoaded', () => {


    store.dispatch(fetchAllData()).then(() => {
        console.log(store.getState());
        let position = store.getState().cube.position;
        let rotation = store.getState().cube.rotation;


        const render = new Render();
        const cube = new Cube();
        const light = new Light();

        cube.setPosition(position.x,position.y,position.z);
        cube.setRotation(rotation.x,rotation.y,rotation.z);

        new Controller(cube,render);
        new UIManager(cube,light,render.getScene());
        render.getScene().add(light.getLight());
        render.getScene().add(cube.getObject());



        const animate = () => {

            render.render();
            requestAnimationFrame(animate);
        };

        animate();
    })
});
