import { useEffect } from 'react';

import { useWheaterCityStore } from '../../hooks/useWheaterCityStore';
import { APICoordInterface } from '../../interfaces/interfaces-Api/ApiCoordInterface';
import { WeatherCard } from '../weatherCard/WeatherCard';
import { WeatherList } from '../weatherList/WeatherList';

export const Wheater = () => {
  const { startWeatherCity, datasCity, datas } = useWheaterCityStore();

  const coords = (newLat?: number, newLon?: number): void => {
    if (datas[0] === undefined) return;
    const { lat, lon } = datas[0];

    const latToUse = newLat || lat;
    const lonToUse = newLon || lon;

    startWeatherCity(latToUse, lonToUse);
  }

  useEffect(() => {
    coords();
  }, [datas]);


  return (
    <div>
      {
        <WeatherCard
          key={datasCity.id}
          {...datasCity}
        />
      }
      <hr />

      {
        datas.map(data => (
          <WeatherList
            key={data!.lat}
            {...data}
            coords={coords}
          />
        ))
      }

    </div>
  )
}


