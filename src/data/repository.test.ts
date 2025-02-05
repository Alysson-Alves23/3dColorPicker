import { describe, expect, it, beforeEach } from '@jest/globals';
import { CubeRepository } from "./repository";
import config from './config';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('CubeRepository', () => {
    let cubeRepository: CubeRepository;

    beforeEach(() => {
        cubeRepository = new CubeRepository();
        fetchMock.resetMocks();
    });

    it('should fetch cube data', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({
                color: "#ffffff",
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 0, z: 0 }

        }));

        const cube = await cubeRepository.getCubeData();
        expect(cube).toEqual({
            color: "#ffffff",
            position: { x: 0, y: 0, z: 0 },
            rotation: { x: 0, y: 0, z: 0 }

        });
        expect(fetchMock).toHaveBeenCalledWith(`http://${config.url}:${config.port}/cube`);
    });

    it('should update cube data', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({}));

        await cubeRepository.updateCubeData({
            color: "#ff0000",
            position: { x: 1, y: 2, z: 3 },
            rotation: { x: 1, y: 2, z: 3 }
        });

        expect(fetchMock).toHaveBeenCalledWith(`http://${config.url}:${config.port}/cube`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                cube: {
                    color: "#ff0000",
                    position: { x: 1, y: 2, z: 3 },
                    rotation: { x: 1, y: 2, z: 3 }
                }
            })
        });
    });

    it('should fetch light intensity', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({intensity: 1}));

        const intensity = await cubeRepository.getLightIntensity();
        expect(intensity).toBe(1);
        expect(fetchMock).toHaveBeenCalledWith(`http://${config.url}:${config.port}/light`);
    });

    it('should update light intensity', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({}));

        await cubeRepository.updateLightIntensity(0.5);
        expect(fetchMock).toHaveBeenCalledWith(`http://${config.url}:${config.port}/light`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ intensity: 0.5 })
        });
    });

    it('should fetch background color', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({ color: "#ff0000" }));

        const backgroundColor = await cubeRepository.getBackgroundColor();
        expect(backgroundColor).toBe("#ff0000");
        expect(fetchMock).toHaveBeenCalledWith(`http://${config.url}:${config.port}/background`);
    });

    it('should update background color', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({}));

        await cubeRepository.updateBackgroundColor("#000000");
        expect(fetchMock).toHaveBeenCalledWith(`http://${config.url}:${config.port}/background`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( { color: "#000000" })
        });
    });
});
