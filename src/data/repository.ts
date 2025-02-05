import config from "./config";
export class CubeRepository {
        private static baseApiUrl = `${config.url}${config.port}`;

        public async getCubeData(): Promise<{ color: string; position: { x: number; y: number; z: number }; rotation: { x: number; y: number; z: number } }> {
                const response = await fetch(`http://${CubeRepository.baseApiUrl}/cube`);
                if (!response.ok) {
                        throw new Error(`Failed to fetch cube data: ${response.statusText}`);
                }
                return response.json().then(data => {
                        console.log(data);
                        return data
                });
        }

        public async updateCubeData(cube: { color: string; position: { x: number; y: number; z: number }; rotation: { x: number; y: number; z: number } }): Promise<void> {
                const response = await fetch(`http://${CubeRepository.baseApiUrl}/cube`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({...cube }),
                });
                if (!response.ok) {
                        throw new Error(`Failed to update cube data: ${response.statusText}`);
                }
        }

        public async getLightIntensity(): Promise<number> {
                const response = await fetch(`http://${CubeRepository.baseApiUrl}/light`);
                if (!response.ok) {
                        throw new Error(`Failed to fetch light intensity: ${response.statusText}`);
                }
                return response.json().then(data => data.intensity);
        }

        public async updateLightIntensity(intensity: number): Promise<void> {
                const response = await fetch(`http://${CubeRepository.baseApiUrl}/light`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ intensity: intensity }),
                });
                if (!response.ok) {
                        throw new Error(`Failed to update light intensity: ${response.statusText}`);
                }
        }

        public async getBackgroundColor(): Promise<string> {
                const response = await fetch(`http://${CubeRepository.baseApiUrl}/background`);
                if (!response.ok) {
                        throw new Error(`Failed to fetch background color: ${response.statusText}`);
                }
                const data = await response.json();
                return data.color;
        }

        public async updateBackgroundColor(color: string): Promise<void> {
                const response = await fetch(`http://${CubeRepository.baseApiUrl}/background`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({color: color } ),
                });
                if (!response.ok) {
                        throw new Error(`Failed to update background color: ${response.statusText}`);
                }
        }
}
