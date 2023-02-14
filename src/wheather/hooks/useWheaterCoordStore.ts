import { useSelector, useDispatch } from 'react-redux';

import { onLoadedCity, onLoadedCoords, clearErrorMessage, errorMessageCity, checkingCoords, checkingCity } from '../../store/wheather/weatherSlice';

import { WheaterInterface } from '../interfaces/interfaces-Slice/WheatherInterface';
import { APICoordInterface } from '../interfaces/interfaces-Api/ApiCoordInterface';

import { ApisCoord, ApiWheater } from '../api';

type AppState = {
    wheater: WheaterInterface
}

export const useWheaterCoordStore = () => {

    const { dataCoords, dataCity, isErrorCity, isErrorCoords, isLoading } = useSelector<AppState, WheaterInterface>(state => state.wheater);
    const dispatch = useDispatch();


    const startSearchCoords = async (city: string | string[]): Promise<void> => {
        dispatch(checkingCoords());
        try {
            const { data } = await ApisCoord.get(`/direct?q=${city}&limit=${5}`);

            const uniqueLat = [...new Set(data.map((resp: APICoordInterface): number => resp.lat))].map(lat => {
                return data.find((resp: APICoordInterface): boolean => resp.lat === lat);
            }).filter(resp => resp !== undefined) as APICoordInterface[];

            dispatch(onLoadedCoords(uniqueLat));
        }
        catch (error) {
            dispatch(errorMessageCity(error));
        }
    };

    const startSearchCity = async (lat: number, lon: number): Promise<void> => {
        dispatch(checkingCity());

        try {
            const { data } = await ApiWheater.get(`weather?lat=${lat}&lon=${lon}`);
            dispatch(onLoadedCity(data));

        } catch (error) {
            dispatch(errorMessageCity(error));
        }
    };

    const cleanError = () => {
        dispatch(clearErrorMessage());
    }

    return {
        //Propiedades
        dataCoords,
        isErrorCity,
        isErrorCoords,
        isLoading,
        dataCity,

        //Métodos
        startSearchCoords,
        startSearchCity,
        cleanError
    }
}
