import * as THREE from "three";

export class Cube {
    private object: THREE.Mesh;

    constructor() {
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    this.object = new THREE.Mesh( geometry, material );
    }

    getObject(): THREE.Mesh {
        return this.object;
    }

    setColor(color: string): void {
        this.object.material = new THREE.MeshBasicMaterial({color: color});
    }

    setPosition(x: number, y: number, z: number): void {
        this.object.position.set(x, y, z);
    }

    setRotation(x: number, y: number, z: number): void {
        this.object.rotation.set(x, y, z);
    }
}
