import React, { useState, useEffect } from 'react';
import { WEATHER_API_URL } from '../api';
import './forecast.css';

function Card({ day }) {
    const ms = day.dt * 1000;
    const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});
    const imgURL = `owf owf-${day.weather[0].id} owf-5x icon-style`;

    return (
        <div className="col-auto">
            <div className="card bg-light">
                <h3 className="card-title">{weekdayName}</h3>
                <i className={imgURL}></i>
                <h2>{Math.round(day.main.temp)} °C</h2>
                <div className="card-body">
                    <button className="btn btn-dark btn-outline-light">{day.weather[0].description}</button>
                </div>
            </div>
        </div>
    );
}

export default function Forecast() {
    const [days, setDays] = useState([]);

    useEffect(() => {
        fetch(WEATHER_API_URL)
            .then(res => res.json())
            .then(data => {
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"));
                setDays(dailyData);
            })
            .catch(error => console.error("Error fetching forecast:", error));
    }, []);

    const formatCards = () => {
        return days.map((day) => <Card day={day} />);
    };

    return (
        <div className="">
            <h5 className="display-4 text-muted">Kiev</h5>
            <div className="row justify-content-center">
                {formatCards()}
            </div>
        </div>
    );
}
