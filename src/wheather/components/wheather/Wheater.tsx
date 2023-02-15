import { useEffect } from 'react';
import Swal from 'sweetalert2';

import { WeatherCard } from './weatherCard/WeatherCard';
import { WeatherList } from './weatherList/WeatherList';
import { useWheaterCoordStore } from '../../hooks/useWheaterCoordStore';

import './wheaterStyle.css';

export const Wheater = () => {

  const { startSearchCity, isErrorCity, isErrorCoords, dataCoords, dataCity, cleanError } = useWheaterCoordStore();

  const coords = (newLat?: number, newLon?: number): void => {
    if (dataCoords[0] === undefined) return;
    const { lat, lon } = dataCoords[0];

    const latToUse = newLat || lat;
    const lonToUse = newLon || lon;

    startSearchCity(latToUse, lonToUse);
  }

  useEffect(() => {
    coords();
  }, [dataCoords]);

  (isErrorCity || isErrorCoords !== undefined)
    && (Swal.fire('Ciudad Erronea', 'La ciudad es erronea o sus datos meteorologicos no estan disponibles', 'error'), cleanError());

  return (
    <div className='wheaterStyle'>
      {
        <WeatherCard
          key={dataCity.id}
          {...dataCity}
        />
      }

      <div className='weatherStyle__list'>
        {
          dataCoords.map(data => (
            <WeatherList
              key={data!.lat}
              {...data}
              coords={coords}
            />
          ))
        }
      </div>


    </div>
  )
}


