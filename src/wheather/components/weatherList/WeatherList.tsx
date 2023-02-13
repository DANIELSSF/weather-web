import { APICoordInterface } from '../../interfaces/interfaces-Api/ApiCoordInterface';


type CoordsFn = (newLat?: number, newLon?: number) => void;
type WeatherCardProps = APICoordInterface & {coords:CoordsFn};

export const WeatherList = (props: WeatherCardProps) => {

    const { name, country, state, lon, lat, coords } = props;

    return (
        <>
            <ul>
                <div>
                    <h2>{name}</h2>
                    <p>{country}, {state}</p>

                    <button onClick={() => coords(lat, lon)}>Cambiar ciudad</button>
                </div>
            </ul>


        </>
    )
}

