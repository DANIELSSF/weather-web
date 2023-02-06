import { FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import queryString from 'query-string';

import { CityName } from '../interfaces/CityName';
import { useForm } from '../../hooks/useForm';

export const SearchWheater = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { q = '' } = queryString.parse(location.search);
    const validationCityName = typeof q === 'string'
        ? q
        : (Array.isArray(q)
            ? q.join('')
            : '');

    const { form, cityName, handleCity } = useForm<CityName>({
        cityName: validationCityName
    });

    const onSubmitSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate(`?q=${cityName}`);
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