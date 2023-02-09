import { useEffect, useState } from 'react';
import axios from 'axios';

import { getEnvVariables } from '../../helpers/getEnvVariables';

const { VITE_API_KEY, VITE_API_URL_COORDS } = getEnvVariables();

export const ApisCoord = axios.create({
    baseURL: VITE_API_URL_COORDS,
    params: {
        appid: VITE_API_KEY
    }
});
