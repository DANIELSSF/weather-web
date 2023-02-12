import { createSlice } from '@reduxjs/toolkit';
import { getDefaultInfoCity } from '../../wheather/helpers/getDefaultInfoCity';
import { WeatherCityInterface } from '../../wheather/interfaces/interfaces-Slice/WeatherCityInterface';

export const weatherCitySlice = createSlice({
    name: 'weatherCity',
    initialState: {
        isLoading: true,
        data: getDefaultInfoCity,
        datasCity: {},
        isErrorCity: ''

    } as WeatherCityInterface,
    reducers: {
        checking: (state) => {
            state.isLoading = true;
            state.data = getDefaultInfoCity
            state.isErrorCity = undefined;
        },
        onLoad: (state, { payload }) => {
            state.isLoading = false;
            state.datasCity = payload;
            state.isErrorCity = undefined;
        },
        errorMessage: (state, { payload }) => {
            state.isLoading = false;
            state.data = getDefaultInfoCity;
            state.isErrorCity = payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    checking,
    errorMessage,
    onLoad
} = weatherCitySlice.actions;