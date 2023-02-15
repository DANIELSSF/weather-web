import { APICoordInterface } from '../interfaces-Api/ApiCoordInterface';
import { APIWheaterInterface } from '../interfaces-Api/ApiWheaterInterface';
import { getDefaultInfoCoords } from '../../helpers/getDefaultInfoCoords';

export interface WheaterInterface {
    isLoading: boolean,
    dataCoords: APICoordInterface[] | typeof getDefaultInfoCoords[],
    dataCity: APIWheaterInterface,
    isErrorCoords: undefined | string,
    isErrorCity: undefined | string,
}