import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm, useQuery } from '../../../hooks';
import { useWheaterCoordStore } from '../../hooks/useWheaterCoordStore';

import { CityName } from '../../interfaces/components/CityName';

import Swal from 'sweetalert2';
import './searchWeatherStyle.css';

export const SearchWheater = () => {

    const navigate = useNavigate();
    const { startSearchCoords, cleanError } = useWheaterCoordStore();

    const { validationCityName } = useQuery();

    const { cityName, handleCity } = useForm<CityName>({
        cityName: validationCityName
    });

    const onSubmitSearch = (e: FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        if (!cityName) {
            Swal.fire('Campo vacío', 'Inserta una ciudad valida', 'warning');
            return cleanError()};

        navigate(`?q=${cityName}`);
        startSearchCoords(cityName);
    };

    return (
        <div className='searchWeatherStyle'>
            <h3 className='searchWeatherStyle__h3'>{cityName}</h3>
            <form 
            onSubmit={onSubmitSearch}
            className='searchWeatherStyle__form'
            >
                <input
                    name='cityName'
                    value={cityName}
                    type="text"
                    onChange={handleCity}
                    className='searchWeatherStyle__input'
                />

                <img src='src\wheather\components\searchWheater\icon\search.svg' 
                alt='search_icon.svg'
                className='searchWeatherStyle__fa' />
            </form>
        </div>
    )
}