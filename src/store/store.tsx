import { configureStore } from '@reduxjs/toolkit';
import { wheaterSlice } from './weather/weatherSlice';

export const store = configureStore({
    reducer: {
        wheater: wheaterSlice.reducer,
    },
});
