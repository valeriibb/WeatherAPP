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
    const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ru&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27";
    const [hourlyData, setHourlyData] = useState([]);

    useEffect(() => {
        
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
                    icon: `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
                    temperature: `${item.main.temp.toFixed(0)}°C`,
                    direction: `direction_url_here`, // замените на ваш URL для иконки направления ветра
                    speed: `${item.wind.speed}km/h`
                }));
                setHourlyData(hourlyData);
            })
            .catch(error => {
                console.error('Exception (forecast):', error);
            });
    }, [props.city]);


    return (
    <div className="HourlyItems">
        {hourlyData.map((item, index) => (
            <div key={index}>
                <HorItem time={item.dt_txt} icon='./clear 1.png' temperature='26°C' direction='./navigation 1.png' speed='3km/h' />
               
               
            </div>
        ))}
    </div>

    );
}
