import { APICoordInterface } from '../../../interfaces/interfaces-Api/ApiCoordInterface';
import './weatherListStyle.css';

type CoordsFn = (newLat?: number, newLon?: number) => void;
type WeatherCardProps = APICoordInterface & { coords: CoordsFn };

export const WeatherList = (props: WeatherCardProps) => {

    const { name, country, state, lon, lat, coords } = props;

    return (
        <div className='WeatherList'>
            <a
                onClick={() => coords(lat, lon)}
                className='WeatherList__city'
            >
                <h2>{name}</h2>
                <p>{country}, {state}</p>

            </a>
        </div>
    )
}

