import {CubeRepository} from './repository';
import {beforeEach, describe, expect, it} from "@jest/globals";

describe('CubeRepository Integration Tests', () => {
    let cubeRepository: CubeRepository;

    beforeEach(() => {
        cubeRepository = new CubeRepository();
    });

    it('should fetch object color from the API', async () => {
        const color = await cubeRepository.getObjectColor();
        expect(color).toBe('#00ff00');
    });

    it('should update object color on the API', async () => {
        await cubeRepository.updateObjectColor('#ff0000');
        const color = await cubeRepository.getObjectColor();
        expect(color).toBe('#ff0000');
    });

    it('should fetch light intensity from the API', async () => {
        const intensity = await cubeRepository.getLightIntensity();
        expect(intensity).toBe(1);
    });

    it('should update light intensity on the API', async () => {
        await cubeRepository.updateLightIntensity(0.5);
        const intensity = await cubeRepository.getLightIntensity();
        expect(intensity).toBe(0.5);
    });
});