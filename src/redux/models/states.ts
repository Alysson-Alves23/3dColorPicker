export interface CubeState {
    color: string;
    position: { x: number; y: number; z: number };
    rotation: { x: number; y: number; z: number };
}

export interface LightState {
    intensity: number;
}

export interface BackgroundState {
    color: string;
}