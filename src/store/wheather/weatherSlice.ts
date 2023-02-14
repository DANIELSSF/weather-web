import { createSlice } from '@reduxjs/toolkit';
import { WheaterInterface } from '../../wheather/interfaces/interfaces-Slice/WheatherInterface';
import { getDefaultInfoCity } from '../../wheather/helpers/getDefaultInfoCity';
import { getDefaultInfoCoords } from '../../wheather/helpers/getDefaultInfoCoords';

export const wheaterSlice = createSlice({
    name: 'wheater',
    initialState: {
        isLoading: true,
        isErrorCity: undefined,
        isErrorCoords: undefined,
        dataCoords: [],
        dataCity: getDefaultInfoCity,

    } as WheaterInterface,

    reducers: {
        checkingCoords: (state):void => {
            state.isLoading = true;
            state.dataCoords = [getDefaultInfoCoords];
            state.isErrorCoords = undefined;
            state.isErrorCity = undefined;
            state.dataCity = getDefaultInfoCity;
        },
        checkingCity: (state):void => {
            state.isLoading = true;
            state.dataCity = getDefaultInfoCity;
            state.isErrorCoords = undefined;
            state.isErrorCity = undefined;
        },
        onLoadedCoords: (state, { payload }):void => {
            state.isLoading = false;
            state.dataCoords = payload;
            state.isErrorCoords = undefined;
            state.isErrorCity = undefined;
        },
        onLoadedCity: (state, { payload }):void => {
            state.isLoading = false;
            state.dataCity = payload;
            state.isErrorCoords = undefined;
            state.isErrorCity = undefined;
        },
        clearErrorMessage: (state):void => {
            state.isErrorCoords = undefined;
            state.isErrorCity = undefined;
        },
        errorMessageCity: (state, { payload }):void => {
            state.isErrorCity = payload;
        },
        errorMessageCoords: (state, { payload }):void => {
            state.isErrorCoords = payload;
        }
    }
});


export const {
    checkingCoords,
    checkingCity,
    onLoadedCity,
    clearErrorMessage,
    errorMessageCoords,
    errorMessageCity,
    onLoadedCoords
} = wheaterSlice.actions;