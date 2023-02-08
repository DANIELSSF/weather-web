import { APIWheaterInterface } from '../../wheather/interfaces/ApiWheaterInterface';

export interface WheaterInterface {
    isLoading: boolean,
    datas: APIWheaterInterface[]
    isError: undefined | string
}