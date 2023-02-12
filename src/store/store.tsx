import { configureStore } from '@reduxjs/toolkit';
import { wheaterSlice } from './wheather/weatherSlice';
import { weatherCitySlice } from './wheather/wheaterCitySlice';

export const store = configureStore({
    reducer: {
        wheater: wheaterSlice.reducer,
        wheaterCity: weatherCitySlice.reducer,
    },
});
