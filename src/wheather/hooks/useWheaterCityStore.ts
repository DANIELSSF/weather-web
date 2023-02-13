import { useDispatch, useSelector } from 'react-redux';
import { onLoad } from '../../store/wheather/wheaterCitySlice';
import { ApiWheater } from '../api/ApiWheater';

import { WheaterInterface } from '../interfaces/interfaces-Slice/WheatherInterface';
import { WeatherCityInterface } from '../interfaces/interfaces-Slice/WeatherCityInterface';

type AppState = {
    wheater: WheaterInterface;
}

type AppStateCity = {
    wheaterCity: WeatherCityInterface
}

export const useWheaterCityStore = () => {

    const dispatch = useDispatch();
    const { datas } = useSelector<AppState, WheaterInterface>(state => state.wheater);
    const { datasCity } = useSelector<AppStateCity, WeatherCityInterface>(state => state.wheaterCity);


    const startWeatherCity = async (lat:number, lon: number) => {

        try {
            const { data } = await ApiWheater.get(`weather?lat=${lat}&lon=${lon}`);
            dispatch(onLoad(data));

        } catch (error) {
            console.log(error);
        }

    }

    return {
        // Properties
        datasCity,
        datas,
        //Métodos
        startWeatherCity,
    }
}
