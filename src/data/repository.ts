import config from "./config";
import Cube from "./models/Cube";

class CubeRepository {
        private static baseApiUrl = `${config.url}:${config.port}`;

        /**
         * Busca a cor do objeto no backend.
         * @returns A cor do objeto no formato hexadecimal.
         */
        public async getObjectColor(): Promise<string> {
                console.log("API_URL:", process.env.API_URL);
                console.log("API_PORT:", process.env.API_PORT);
                console.log("Base API URL:", CubeRepository.baseApiUrl);

                const response = await fetch(`${CubeRepository.baseApiUrl}/objectColor`);

                if (!response.ok) {
                        throw new Error(`Failed to fetch object color: ${response.statusText}`);
                }
                const data = await response.text();
                return data;
        }

}

export default CubeRepository;