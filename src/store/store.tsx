import { configureStore } from '@reduxjs/toolkit';
import { wheaterSlice } from './wheather/weatherSlice';

export const store = configureStore({
    reducer: {
        wheater: wheaterSlice.reducer,
    },
});
