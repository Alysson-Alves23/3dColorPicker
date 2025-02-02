import config from "./config";

class CubeRepository {
        private static baseApiUrl = `${config.url}:${config.port}`;

        /**
         * Busca a cor do objeto no backend.
         * @returns A cor do objeto no formato hexadecimal.
         */
        public async getObjectColor(): Promise<string> {
                const response = await fetch(`${CubeRepository.baseApiUrl}/objectColor`);
                if (!response.ok) {
                        throw new Error(`Failed to fetch object color: ${response.statusText}`);
                }
                const data = await response.json();
                return data.color;
        }

        /**
         * Atualiza a cor do objeto no backend.
         * @param color - A nova cor do objeto no formato hexadecimal.
         */
        public async updateObjectColor(color: string): Promise<void> {
                const response = await fetch(`${CubeRepository.baseApiUrl}/objectColor`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ color }),
                });
                if (!response.ok) {
                        throw new Error(`Failed to update object color: ${response.statusText}`);
                }
        }

        /**
         * Busca a intensidade da luz no backend.
         * @returns A intensidade da luz (número entre 0 e 1).
         */
        public async getLightIntensity(): Promise<number> {
                const response = await fetch(`${CubeRepository.baseApiUrl}/light`);
                if (!response.ok) {
                        throw new Error(`Failed to fetch light intensity: ${response.statusText}`);
                }
                const data = await response.json();
                return data.intensity;
        }

        /**
         * Atualiza a intensidade da luz no backend.
         * @param intensity - A nova intensidade da luz (número entre 0 e 1).
         */
        public async updateLightIntensity(intensity: number): Promise<void> {
                const response = await fetch(`${CubeRepository.baseApiUrl}/light`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ intensity }),
                });
                if (!response.ok) {
                        throw new Error(`Failed to update light intensity: ${response.statusText}`);
                }
        }

        /**
         * Busca a cor de fundo no backend.
         * @returns A cor de fundo no formato hexadecimal.
         */
        public async getBackgroundColor(): Promise<string> {
                const response = await fetch(`${CubeRepository.baseApiUrl}/backgroundColor`);
                if (!response.ok) {
                        throw new Error(`Failed to fetch background color: ${response.statusText}`);
                }
                const data = await response.json();
                return data.color;
        }

        /**
         * Atualiza a cor de fundo no backend.
         * @param color - A nova cor de fundo no formato hexadecimal.
         */
        public async updateBackgroundColor(color: string): Promise<void> {
                const response = await fetch(`${CubeRepository.baseApiUrl}/backgroundColor`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ color }),
                });
                if (!response.ok) {
                        throw new Error(`Failed to update background color: ${response.statusText}`);
                }
        }

        /**
         * Busca a posição do objeto no backend.
         * @returns A posição do objeto no formato {x: number, y: number, z: number}.
         */
        public async getPosition(): Promise<{ x: number; y: number; z: number }> {
                const response = await fetch(`${CubeRepository.baseApiUrl}/position`);
                if (!response.ok) {
                        throw new Error(`Failed to fetch position: ${response.statusText}`);
                }
                const data = await response.json();
                return data.position;
        }

        /**
         * Atualiza a posição do objeto no backend.
         * @param position - A nova posição do objeto no formato { x: number, y: number, z: number }.
         */
        public async updatePosition(position: { x: number; y: number; z: number }): Promise<void> {
                const response = await fetch(`${CubeRepository.baseApiUrl}/position`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ position }),
                });
                if (!response.ok) {
                        throw new Error(`Failed to update position: ${response.statusText}`);
                }
        }

        /**
         * Busca a rotação do objeto no backend.
         * @returns A rotação do objeto no formato {x: number, y: number, z: number}.
         */
        public async getRotation(): Promise<{ x: number; y: number; z: number }> {
                const response = await fetch(`${CubeRepository.baseApiUrl}/rotation`);
                if (!response.ok) {
                        throw new Error(`Failed to fetch rotation: ${response.statusText}`);
                }
                const data = await response.json();
                return data.rotation;
        }

        /**
         * Atualiza a rotação do objeto no backend.
         * @param rotation - A nova rotação do objeto no formato { x: number, y: number, z: number }.
         */
        public async updateRotation(rotation: { x: number; y: number; z: number }): Promise<void> {
                const response = await fetch(`${CubeRepository.baseApiUrl}/rotation`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ rotation }),
                });
                if (!response.ok) {
                        throw new Error(`Failed to update rotation: ${response.statusText}`);
                }
        }
}

export default CubeRepository;