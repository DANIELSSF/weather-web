import { getInfoWeatherCity } from '../../../helpers/getInfoWeatherCity';
import { APIWheaterInterface } from '../../../interfaces/interfaces-Api/ApiWheaterInterface';

import './weatherCardStyle.css';

type propsFinal = APIWheaterInterface & { isLoading: boolean }

export const WeatherCard = (props: propsFinal) => {

    const { isLoading, weather, main, wind, ...rest } = props;

    const { description, temp, temp_max, humidity, icon, speed } = getInfoWeatherCity(weather, main, wind);

    const iconImage = () => {
        if (!icon) return '';
        return `http://openweathermap.org/img/wn/${icon}@2x.png`;
    }
    const image = iconImage();

    return (
        <div className='weatherCardStyle'>
            {
                (isLoading)
                    ? <div className='loader_bg'>
                        <div className='loader'></div>
                    </div>
                    : (temp_max === -273.15)
                        ? <div className='weatherCardStyle__h5'>No hay ciudades disponibles</div>
                        : <>
                            <h5
                                className='weatherCardStyle__temp'
                            >{temp?.toFixed(1)}°C </h5>
                            <span className='weatherCardStyle__temp__span'>{description?.toUpperCase()}</span>

                            <div className='weatherCardStyle__container'>
                                <div className='weatherCardStyle__info'>
                                    <h5 className='weatherCardStyle__data temperature'> {temp_max?.toFixed(1)}°C Max.</h5>
                                    <h5 className='weatherCardStyle__data wind'> {speed?.toFixed(1)} km/h.</h5>
                                    <h5 className='weatherCardStyle__data humidity' > {humidity}% </h5>
                                </div>
                                <figure className='weatherCardStyle__figure'>
                                    <img src={image}
                                        className='weatherCardStyle__img'
                                    ></img>
                                </figure>
                            </div>
                        </>
            }

        </div>
    )
}
