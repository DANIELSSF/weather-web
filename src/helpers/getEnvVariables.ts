

export const getEnvVariables = () => {

    //import.meta.env;

    return {
        ...import.meta.env,
        VITE_MODE: import.meta.env.DEV,
        VITE_API_KEY: import.meta.env.VITE_API_KEY,
        VITE_API_URL_WHEATER: import.meta.env.VITE_API_URL_WHEATER,
        VITE_API_URL_COORDS: import.meta.env.VITE_API_URL_COORDS
    };

}
