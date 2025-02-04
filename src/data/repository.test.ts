import {describe, expect, it, beforeEach} from '@jest/globals';
import {CubeRepository} from "./repository";
import config from './config';
import fetchMock from 'jest-fetch-mock';


fetchMock.enableMocks();

describe('CubeRepository', () => {
    let cubeRepository: CubeRepository;

    beforeEach(() => {
        cubeRepository = new CubeRepository();
        fetchMock.resetMocks();
    });


    it('should fetch object color', async () => {

        fetchMock.mockResponseOnce('#00ff00' );

        const color = await cubeRepository.getObjectColor();
        expect(color).toBe('#00ff00');
        expect(fetchMock).toHaveBeenCalledWith(`http://${config.url}:${config.port}/color`);
    });


    it('should throw an error if fetching object color fails', async () => {

        fetchMock.mockRejectOnce(new Error('Failed to fetch object color: Not Found'));

        await expect(cubeRepository.getObjectColor()).rejects.toThrow('Failed to fetch object color: Not Found');
    });

    it('should update object color', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({}));

        await cubeRepository.updateObjectColor('#ff0000');
        expect(fetchMock).toHaveBeenCalledWith(`http://${config.url}:${config.port}/color`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ color: '#ff0000' }),
        });
    });


    it('should fetch light intensity', async () => {

        fetchMock.mockResponseOnce( JSON.stringify(1) );

        const intensity = await cubeRepository.getLightIntensity();
        expect(intensity).toBe(1);
        expect(fetchMock).toHaveBeenCalledWith(`http://${config.url}:${config.port}/lightIntensity`);
    });


    it('should update light intensity', async () => {

        fetchMock.mockResponseOnce(JSON.stringify({}));

        await cubeRepository.updateLightIntensity(0.5);
        expect(fetchMock).toHaveBeenCalledWith(`http://${config.url}:${config.port}/lightIntensity`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ intensity: 0.5 }),
        });
    });


    it('should fetch background color', async () => {

        fetchMock.mockResponseOnce( '#ffffff');

        const color = await cubeRepository.getBackgroundColor();
        expect(color).toBe('#ffffff');
        expect(fetchMock).toHaveBeenCalledWith(`http://${config.url}:${config.port}/backgroundColor`);
    });


    it('should update background color', async () => {

        fetchMock.mockResponseOnce(JSON.stringify({}));

        await cubeRepository.updateBackgroundColor('#000000');
        expect(fetchMock).toHaveBeenCalledWith(`http://${config.url}:${config.port}/backgroundColor`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ color: '#000000' }),
        });
    });


    it('should fetch position', async () => {

        fetchMock.mockResponseOnce(JSON.stringify({  x: 0, y: 0, z: 0 }));

        const position = await cubeRepository.getPosition();
        expect(position).toEqual({ x: 0, y: 0, z: 0 });
        expect(fetchMock).toHaveBeenCalledWith(`http://${config.url}:${config.port}/position`);
    });


    it('should update position', async () => {

        fetchMock.mockResponseOnce(JSON.stringify({}));

        await cubeRepository.updatePosition({ x: 1, y: 2, z: 3 });
        expect(fetchMock).toHaveBeenCalledWith(`http://${config.url}:${config.port}/position`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ x: 1, y: 2, z: 3 }),
        });
    });

    it('should fetch rotation', async () => {

        fetchMock.mockResponseOnce(JSON.stringify({ x: 0, y: 0, z: 0 }));

        const rotation = await cubeRepository.getRotation();
        expect(rotation).toEqual({ x: 0, y: 0, z: 0 });
        expect(fetchMock).toHaveBeenCalledWith(`http://${config.url}:${config.port}/rotation`);
    });

    it('should update rotation', async () => {

        fetchMock.mockResponseOnce(JSON.stringify({}));

        await cubeRepository.updateRotation({ x: 1, y: 2, z: 3 });
        expect(fetchMock).toHaveBeenCalledWith(`http://${config.url}:${config.port}/rotation`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( { x: 1, y: 2, z: 3 }),
        });
    });
});