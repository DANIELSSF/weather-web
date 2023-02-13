import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { CityName } from '../../interfaces/CityName';
import { useForm, useQuery } from '../../../hooks';
import { useWheaterCoordStore } from '../../hooks/useWheaterCoordStore';

export const SearchWheater = () => {

    const navigate = useNavigate();
    const { startSearch } = useWheaterCoordStore();

    const { validationCityName } = useQuery();

    const { cityName, handleCity } = useForm<CityName>({
        cityName: validationCityName
    });

    const onSubmitSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!cityName) return;
        
        navigate(`?q=${cityName}`);
        startSearch(cityName);
    };

    return (
        <>
            <form onSubmit={onSubmitSearch}>
                <h3>Ciudad: <span>{cityName}</span></h3>
                <input
                    name='cityName'
                    value={cityName}
                    type="text"
                    onChange={handleCity}
                />
            </form>
        </>
    )
}