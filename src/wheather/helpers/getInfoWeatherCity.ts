import { Main, Weather, Wind } from '../interfaces/interfaces-Api/ApiWheaterInterface';

export const getInfoWeatherCity = (weather: Weather[], main: Main, wind: Wind) => {

    if (!weather || !main) return {};

    const { description, icon } = weather[0];
    let { temp, temp_max, humidity } = main;
    let { speed } = wind;

    const kelvin: number = 273.15;

    (!temp || !temp_max)
        ? {}
        : temp -= kelvin; // Convertir de Kelvin a Celsius
    temp_max -= kelvin; // Convertir de Kelvin a Celsius
    ;


    (!speed)
        ? {}
        : speed *= 1.60934;

    return {
        description,
        temp,
        temp_max,
        humidity,
        speed,
        icon
    }
}
