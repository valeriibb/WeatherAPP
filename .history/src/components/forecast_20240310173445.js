import React from 'react';
import { WEATHER_API_KEY } from '../api';
import './forecast.css';

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?appid=${WEATHER_API_KEY}`;

function Card(props) {
    const imgURL = `http://openweathermap.org/img/wn/${props.day.weather[0].icon}.png`;
    const ms = props.day.dt * 1000;
    const weekdayName = new Date(ms).toLocaleString('ru', { weekday: 'long' });

    return (
        <div className='ForItems'>
            <img src={imgURL} alt="Weather Icon" />
            <h3>{weekdayName}</h3>
            <h2>{Math.round(props.day.main.temp)} °C</h2>
        </div>
    );
}

class WeekContainer extends React.Component {
    state = {
        days: []
    }

    componentDidMount = () => {
        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
                this.setState({ days: dailyData })
            })
    }

    formatCards = () => {
        return this.state.days.map((day, index) => <Card day={day} key={index} />)
    }

    render() {
        return (
            <div className="Forecast">
                <h2>5 Days Forecast:</h2>
                <div className="ForecastItems">
                    {this.formatCards()}
                </div>
            </div>
        );
    }
}

export default WeekContainer;
