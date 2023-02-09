import { useState, useEffect } from 'react';
import axios from 'axios';

import { ApisCoord } from './ApisCoord';
import { APIWheaterInterface } from '../interfaces/ApiWheaterInterface';
import { getEnvVariables } from '../../helpers/getEnvVariables';

export const ApiWheater = (city: string | string[]) => {

    const [wheater, setWheater] = useState<APIWheaterInterface>();

    const { VITE_API_KEY, VITE_API_URL_WHEATER } = getEnvVariables();
    const apiKey: string = VITE_API_KEY;
    // const { lat, lon } = ApisCoord(city);
    // const apiWheather = `${VITE_API_URL_WHEATER}?appid=${apiKey}&lat=${lat}&lon=${lon}&lang=es`;

    // useEffect(() => {
    //     if (!lat || !lon) return;

    //     const data = async () => {
    //         const resp = await axios.get(apiWheather)
    //             .then((resp) => setWheater(resp.data))
    //             .catch(error => console.log(error));
    //     }
    //     data();
    // }, [apiWheather]);

    // return {
    //     ...wheater
    // }

}
