import {describe, expect, it, beforeEach} from '@jest/globals';
import  Cube  from './Cube';
describe('Cube', () => {
    let object: Cube;

    beforeEach(() => {
        object = new Cube();
    });

    it('should initialize with default values', () => {
        expect(object.objectColor).toBe('#ffffff');
        expect(object.light).toBe(0);
        expect(object.backgroundColor).toBe(0);
        expect(object.position).toEqual({ x: 0, y: 0, z: 0 });
        expect(object.rotation).toEqual({ x: 0, y: 0, z: 0 });
    });

    it('should update position correctly', () => {
        object.setPosition(10, 20, 30);
        expect(object.position).toEqual({ x: 10, y: 20, z: 30 });
    });

    it('should update rotation correctly', () => {
        object.setRotation(45, 90, 0);
        expect(object.rotation).toEqual({ x: 45, y: 90, z: 0 });
    });

    it('should convert to JSON correctly', () => {
        const json = object.toJSON();
        const expectedJSON = JSON.stringify({
            objectColor: '#ffffff',
            light: 0,
            backgroundColor: 0,
            position: { x: 0, y: 0, z: 0 },
            rotation: { x: 0, y: 0, z: 0 }
        });
        expect(json).toBe(expectedJSON);
    });

    it('should initialize with custom values', () => {
        const customObject = new Cube('#00ff00', 10, 255, { x: 1, y: 2, z: 3 }, { x: 90, y: 180, z: 270 });
        expect(customObject.objectColor).toBe('#00ff00');
        expect(customObject.light).toBe(10);
        expect(customObject.backgroundColor).toBe(255);
        expect(customObject.position).toEqual({ x: 1, y: 2, z: 3 });
        expect(customObject.rotation).toEqual({ x: 90, y: 180, z: 270 });
    });
});