import { SearchWheater, SkyMoon, Wheater } from '../index';

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
