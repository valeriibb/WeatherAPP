import React, { useState, useEffect } from 'react';
import { WEATHER_API_URL, WEATHER_API_KEY } from '../api';

import './hourly.css'
function HorItem(props) {


    return (
        <div className='HorItems'>
            <h3>{props.time}</h3>
            <img style={{height: '80px', width: '80px'}} src={props.icon} alt=""/>
            <h3>{props.temperature}</h3>
            <img style={{height: '55px', width: '55px'}} src={props.direction} alt=""/>
            <h3>{props.speed}</h3>
        </div>
    );
}

export default function Hourly(props) {
    const [hourlyData, setHourlyData] = useState([]);

    useEffect(() => {
        const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&lang=ru&units=metric&APPID=${WEATHER_API_KEY}`;
        
        fetch(weatherURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const hourlyData = data.list.map(item => ({
                    time: item.dt_txt,
                    temperature: `${item.main.temp.toFixed(0)}°C`,
                    description: item.weather[0].description
                }));
                setHourlyData(hourlyData);
            })
            .catch(error => {
                console.error('Exception (forecast):', error);
            });
    }, [props.city]);

    return (
        <div>
            <h2>Hourly Forecast:</h2>
            <HorItem />
            </div>
        </div>
    );
}