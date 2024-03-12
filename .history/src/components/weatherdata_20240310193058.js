import React, { useState, useEffect } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../api";
import axios from "axios";
import './weatherdata.css';

function AtmItems(props) {
    return (
        <div className='AtmItems'>
            <img src={props.img} alt=""/>
            <h3>{props.data}</h3>
            <h3>{props.text}</h3>
        </div>
    );
}

export default function Weatherdata(props) {
    const [weatherData, setWeatherData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${WEATHER_API_KEY}`
            );
            setWeatherData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [props.city]);


    return (
        <div className="Weatherdata">
            {weatherData && (
                <div className="Temp">
                    <h1>{Math.round(weatherData.main.temp)}°C</h1>
                    <h4>Feels like: {Math.round(weatherData.main.feels_like)}°C </h4>
                    <div className="Sunrise">
                        <span>
                            <img src="sunrise-white 1.png" alt=""/>
                        </span>
                        <div className="SunriseDetails">
                            <h3>Схід С</h3>
                            <h3>{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</h3>
                        </div>
                    </div>
                    <div className="Sunrise">
                        <span>
                            <img src="sunrise-white 1.png" alt=""/>
                        </span>
                        <div className="SunriseDetails">
                            <h3>Sunset</h3>
                            <h3>{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</h3>
                        </div>
                    </div>
                </div>
            )}
            <div className="Сonditions">
                <img src="clear 1.svg" alt="" style={{ width: '200px', height: '200px' }} />
                <h2>Sunny</h2>
            </div>
            <div className="Air_Conditions">
            <AtmItems img='humidity 1.png' data={`${weatherData && weatherData.main.humidity}%`} text='Вологість' />
            <AtmItems img='wind 1.png' data={`${weatherData && weatherData.wind.speed} m/s`} text='Швидкість Вітру' />
            <AtmItems img='pressure-white 1.png' data={`${weatherData && weatherData.main.pressure} hPa`} text='Тиск' />
            <AtmItems img='uv-white 1.png' data={weatherData && weatherData.main.value} text='Уф-індекс' />

            </div>
        </div>
    );
}
