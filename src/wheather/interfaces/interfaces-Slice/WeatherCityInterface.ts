import { APIWheaterInterface } from '../interfaces-Api/ApiWheaterInterface';

export interface WeatherCityInterface {
    isLoading: boolean,
    data: APIWheaterInterface,
    datasCity: APIWheaterInterface,
    isErrorCity: string | undefined,
}