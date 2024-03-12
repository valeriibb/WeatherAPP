import React, { useState, useEffect } from 'react';
import { WEATHER_API_URL, WEATHER_API_KEY } from '../api';
import './forecast.css';

import axios from "axios";


function Card (props) {
  
      const imgURL = "owf owf-"+ props.day.weather[0].id +" owf-5x icon-style"

      const ms = props.day.dt * 1000;
      const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});
  
  
  
  
      return (
        <div className='ForItems'>

            <img src={`http://openweathermap.org/img/wn/${props.day.weather[0].icon}.png`} alt="Weather Icon" />
            <h3>{weekdayName}</h3>
            <h2>{Math.round(props.day.main.temp)} °C</h2>
           
          </div>
      )
  }



function WeekContainer(props) {
    const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&lang=ru&units=metric&APPID=${WEATHER_API_KEY}`;
    const [days, setDays] = useState([]);
  
    const fetchData = async () => {
      try {
        const response = await axios.get(weatherURL);
        const dailyData = response.data.list.filter(reading => reading.dt_txt.includes("12:00:00"));
        setDays(dailyData);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, [props.city]);
  
    const formatCards = () => {
      return days.map((day, index) => <Card day={day} key={index} />);
    };
  
    return (
      <div className="Forecast">
        <h2></h2>
        <div className="ForecastItems">
          {formatCards()}
        </div>
      </div>
    );
  }
  export default WeekContainer


  

  

