import { SearchWheater, Wheater } from '../index';

import './weatherPageStyle.css';

export const WheatherPages = () => {
    return (
        <div className='weatherPage'>
            <SearchWheater />
            <Wheater />
        </div>
    )
}
