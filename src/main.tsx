import React from 'react';
import ReactDOM from 'react-dom/client';
import { WeatherApp } from './WheaterApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WeatherApp/>
  </React.StrictMode>
)
