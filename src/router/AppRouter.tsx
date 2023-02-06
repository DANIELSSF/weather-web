import { Routes, Route, Navigate } from 'react-router-dom';
import { WheatherPages } from '../wheather';


export const AppRouter = () => {
    return (
            <Routes>
                <Route path='/' element={<WheatherPages />} />
                <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
    )
}
