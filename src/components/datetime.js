import './datetime.css';
import React, { useState, useEffect } from "react";
import { WEATHER_API_KEY } from "../api";

export default function Datetime(props) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        const savedCity = localStorage.getItem('city');
        if (savedCity) {
            getCurrentTime(savedCity);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('city', props.city);
        getCurrentTime(props.city);
    }, [props.city]);

    function getCurrentTime(cityName) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=uk&appid=${WEATHER_API_KEY}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('City not found');
                }
                return response.json();
            })
            .then(data => {
                const timestamp = data.dt;
                const timezoneOffsetSeconds = data.timezone; 

                const timezoneOffsetMilliseconds = timezoneOffsetSeconds - 7100;

                const currentTime = new Date((timestamp + timezoneOffsetMilliseconds) * 1000); 
                const currentDate = new Date(); 

                setTime(currentTime.toTimeString().substring(0, 5));
                setDate(currentDate.toLocaleDateString('uk'))
            })
            .catch(error => {
                console.error('Error fetching data:', error.message);
            });
    }

    return (
        <div className="Datetime">
            <h2>{props.city ? props.city.charAt(0).toUpperCase() + props.city.slice(1) : "Kiev"}</h2>
            <h1>{time}</h1>
            <p>{date}</p>
        </div>
    );
}
