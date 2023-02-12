import axios from 'axios';
import { getEnvVariables } from '../../helpers/getEnvVariables';


const { VITE_API_KEY, VITE_API_URL_WHEATER } = getEnvVariables();

export const ApiWheater = axios.create({
    baseURL: VITE_API_URL_WHEATER,
    params: {
        appid: VITE_API_KEY,
        lang: 'es'
    }
});