import { useSelector, useDispatch } from 'react-redux';

import { WheaterInterface } from '../interfaces/interfaces-Slice/WheatherInterface';
import { ApisCoord } from '../api/ApisCoord';

import { checking } from '../../store/wheather/wheaterCitySlice';
import { onLoaded, clearErrorMessage, errorMessage } from '../../store/wheather/weatherSlice';
import { APICoordInterface } from '../interfaces/interfaces-Api/ApiCoordInterface';

type AppState = {
    wheater: WheaterInterface
}

export const useWheaterCoordStore = () => {

    const { datas, isError, isLoading } = useSelector<AppState, WheaterInterface>(state => state.wheater);
    const dispatch = useDispatch();


    const startSearch = async (city: string | string[]) => {
        dispatch(checking());
        try {
            const { data } = await ApisCoord.get(`/direct?q=${city}&limit=${5}`);

            const uniqueLat = [...new Set(data.map((resp: APICoordInterface) => resp.lat))].map(lat => {
                return data.find((resp: APICoordInterface) => resp.lat === lat);
            }).filter(resp => resp !== undefined) as APICoordInterface[];

            dispatch(onLoaded(uniqueLat));
        }
        catch (error) {
            dispatch(errorMessage(error));
        }
    }

    return {
        //Propiedades
        datas,
        isError,
        isLoading,

        //Métodos
        startSearch,
    }
}
