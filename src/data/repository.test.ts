import {describe, expect, it, beforeAll, beforeEach, jest} from '@jest/globals';
import Cube from "./models/Cube";
import CubeRepository from "./repository";
import config from "./config";
describe('Cube Repository', () => {
    let object: CubeRepository;

    beforeEach(() => {
         object = new CubeRepository();
        jest.clearAllMocks();
    });

    it('should fetch object color', async () => {

        const color = await object.getObjectColor();
        expect(color).toBe('#00ff00');
    });


})