import { APICoordInterface } from '../interfaces-Api/ApiCoordInterface';

export interface WheaterInterface {
    isLoading: boolean,
    datas: APICoordInterface[],
    isError: undefined | string,
}