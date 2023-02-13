import { getInfoWeatherCity } from '../../helpers/getInfoWeatherCity';
import { APIWheaterInterface } from '../../interfaces/interfaces-Api/ApiWheaterInterface';


export const WeatherCard = (props: APIWheaterInterface) => {

    const { weather, main, ...rest } = props;

    const { description, temp, temp_max, temp_min, humidity } = getInfoWeatherCity(weather, main);

    return (
        <div>

            <h5>Clima: {description}</h5>
            <h5>Temperatura: {temp?.toFixed(2)}</h5>
            <h5>Temperatura miníma: {temp_min?.toFixed(2)}</h5>
            <h5>Temperatura maxima: {temp_max?.toFixed(2)}</h5>
            <h5>Humedad: {humidity}%</h5>

        </div>
    )
}
