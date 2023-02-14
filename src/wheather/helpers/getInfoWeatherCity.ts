import { Main, Weather } from '../interfaces/interfaces-Api/ApiWheaterInterface';

export const getInfoWeatherCity = (weather: Weather[], main: Main) => {
    
    if (!weather || !main) return {};

    const { description, icon } = weather[0];
    let { temp, temp_max, temp_min, humidity } = main;
    const kelvin: number = 273.15;

    (!temp || !temp_max || !temp_min)
        ? {}
        : temp -= kelvin; // Convertir de Kelvin a Celsius
          temp_max -= kelvin; // Convertir de Kelvin a Celsius
          temp_min -= kelvin; // Convertir de Kelvin a Celsius
        ;

    return {
        description,
        temp,
        temp_max,
        temp_min,
        humidity,
        icon
    }
}
