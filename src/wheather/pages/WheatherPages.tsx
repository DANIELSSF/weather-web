import { SkyMoon } from '../components/sky-moon/SkyMoon';
import { SearchWheater, Wheater } from '../index';

import './weatherPageStyle.css';

export const WheatherPages = () => {
    return (
        <div className='weatherPage'>
            <SearchWheater />
            <Wheater />
            <SkyMoon/>

        </div>
    )
}
