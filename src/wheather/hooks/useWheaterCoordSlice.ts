import { useSelector, useDispatch } from 'react-redux';

import { WheaterInterface } from '../interfaces/interfaces-Slice/WheatherInterface';
import { checking, onLoaded, clearErrorMessage, errorMessage } from '../../store';
import { ApisCoord } from '../api/ApisCoord';

type AppState = {
    wheater: WheaterInterface
}

export const useWheaterCoordSlice = () => {

    const { datas, isError, isLoading } = useSelector<AppState, WheaterInterface>(state => state.wheater);
    const dispatch = useDispatch();


    const startSearch = async (city: string | string[]) => {
        dispatch(checking());
        try {
            const { data } = await ApisCoord.get(`/direct?q=${city}&limit=${5}`);
            dispatch(onLoaded( data[0] ));
        }
        catch (error) {
            dispatch(errorMessage( error ));
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
