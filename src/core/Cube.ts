import * as THREE from "three";

export class Cube {
    private cube: THREE.Mesh;
    private edges: THREE.LineSegments;

    constructor() {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); // MeshStandardMaterial para o cubo
        this.cube = new THREE.Mesh(geometry, material);

        // Adicionando arestas ao cubo
        const edgesGeometry = new THREE.EdgesGeometry(geometry);
        const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
        this.edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
        this.cube.add(this.edges);
    }

    getObject(): THREE.Object3D {
        return this.cube;
    }

    setPosition(x: number, y: number, z: number): void {
        this.cube.position.set(x, y, z);
    }

    setRotation(x: number, y: number, z: number): void {
        this.cube.rotation.set(x, y, z);
    }

    setColor(color: number): void {
        (this.cube.material as THREE.MeshStandardMaterial).color.set(color);
    }
}
