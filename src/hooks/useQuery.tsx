import { useLocation } from 'react-router-dom';
import queryString from 'query-string';


export const useQuery = () => {
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);
    const validationCityName = typeof q === 'string'
        ? q
        : (Array.isArray(q)
            ? q.join('')
            : '');

    return {
        validationCityName
    };
}
