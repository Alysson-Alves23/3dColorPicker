export default class Cube {
    objectColor: string;
    light: number;
    backgroundColor: number;
    position: { x: number, y: number, z: number };
    rotation: { x: number, y: number, z: number };

    constructor(
        objectColor: string = "#ffffff",
        light: number = 0,
        backgroundColor: number = 0,
        position: { x: number, y: number, z: number } = { x: 0, y: 0, z: 0 },
        rotation: { x: number, y: number, z: number } = { x: 0, y: 0, z: 0 }
    ) {
        this.objectColor = objectColor;
        this.light = light;
        this.backgroundColor = backgroundColor;
        this.position = position;
        this.rotation = rotation;
    }

    setPosition(x: number, y: number, z: number): void {
        this.position = { x, y, z };
    }

    setRotation(x: number, y: number, z: number): void {
        this.rotation = { x, y, z };
    }

    toJSON(): string {
        return JSON.stringify({
            objectColor: this.objectColor,
            light: this.light,
            backgroundColor: this.backgroundColor,
            position: this.position,
            rotation: this.rotation
        });
    }
}
