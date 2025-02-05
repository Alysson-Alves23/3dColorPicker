export class Configuration {
    private color: string;
    private lightIntensity: number;
    private backgroundColor: number;
    private position: { x: number; y: number; z: number };
    private rotation: { x: number; y: number; z: number };

    constructor(color:String, lightIntensity:number, backgroundColor:String, position: { x: number; y: number; z: number }) {
        this.color = "#ffffff";
        this.lightIntensity = 0;
        this.backgroundColor = 0;
        this.position = { x: 0, y: 0, z: 0 };
        this.rotation = { x: 0, y: 0, z: 0 };
    }


    getColor(): string {
        return this.color;
    }

    getLightIntensity(): number {
        return this.lightIntensity;
    }

    getBackgroundColor(): number {
        return this.backgroundColor;
    }

    getPosition(): { x: number; y: number; z: number } {
        return this.position;
    }

    getRotation(): { x: number; y: number; z: number } {
        return this.rotation;
    }

}
