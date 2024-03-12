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
    const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&lang=ru&units=metric&APPID=${WEATHER_API_KEY}`;
  
        
    fetch(url)
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
    })
    .then(data => {
    data.list.forEach(item => {
        console.log(item.dt_txt, `${item.main.temp.toFixed(0)}°C`, item.weather[0].description);
    });
    })
    .catch(error => {
    console.error('Exception (forecast):', error);
    });



    return (
        <div className="Hourly">
            <h2>Погодинний прогноз:</h2>
            <div className="HourlyItems">
                <HorItem time={'33'} icon='./clear 1.png' temperature='26°C' direction='./navigation 1.png' speed='3km/h' />
                <HorItem time={'33'} icon='./clear 1.png' temperature='26°C' direction='./navigation 1.png' speed='3km/h' />
                <HorItem time={'33'} icon='./clear 1.png' temperature='26°C' direction='./navigation 1.png' speed='3km/h' />
                <HorItem time={'33'} icon='./clear 1.png' temperature='26°C' direction='./navigation 1.png' speed='3km/h' />
                <HorItem time={'33'} icon='./clear 1.png' temperature='26°C' direction='./navigation 1.png' speed='3km/h' />
            </div>

        </div>

    );
}
