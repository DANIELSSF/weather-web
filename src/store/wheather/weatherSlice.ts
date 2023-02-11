import { createSlice } from '@reduxjs/toolkit';
import { WheaterInterface } from '../../wheather/interfaces/interfaces-Slice/WheatherInterface';

export const wheaterSlice = createSlice({
    name: 'wheater',
    initialState: {
        isLoading: true,
        datas: {},
        isError: undefined
    } as WheaterInterface,

    reducers: {
        checking: (state) => {
            state.isLoading = true;
            state.datas = {
                name: '',
                lat: 0,
                lon: 0,
                country: '',
                state: ''
            };
            state.isError = undefined;
        },
        onLoaded: (state, { payload  }) => {
            state.isLoading = false;
            state.datas = payload;
            state.isError = undefined;
        },
        clearErrorMessage: (state) => {
            state.isError = undefined;
        },
        errorMessage: (state, { payload }) => {
            state.isError = payload;
        }
    }
});


export const {
    checking,
    onLoaded,
    clearErrorMessage,
    errorMessage
} = wheaterSlice.actions;