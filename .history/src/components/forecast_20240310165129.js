import React, { useState, useEffect } from 'react';
import { WEATHER_API_URL, WEATHER_API_KEY } from '../api';
import './forecast.css';



function Card (props) {
  
      const imgURL = "owf owf-"+ props.day.weather[0].id +" owf-5x icon-style"

      const ms = props.day.dt * 1000;
      const weekdayName = new Date(ms).toLocaleString('uk', {weekday: 'long'});
  
  
  
  
      return (
        <div className='ForItems'>

            <img src={`http://openweathermap.org/img/wn/${props.day.weather[0].icon}.png`} alt="Weather Icon" />
            <h3>{weekdayName}</h3>
            <h2>{Math.round(props.day.main.temp)} °C</h2>
           
          </div>
      )
  }



  class WeekContainer extends React.Component {
    state = {
      days: []
    }
    weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${thiscity}&lang=ru&units=${WEATHER_API_URL}`;

    componentDidMount = () => {
      fetch(weatherURL)
      .then(res => res.json())
      .then(data => {
        const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
        this.setState({days: dailyData})
      })
    }
  
    formatCards = () => {
      return this.state.days.map((day, index) => <Card day={day} key={index}/>)
    }
  
    render() {
      return (
        <div className="Forecast">
            <h2>5 Days Forecast:</h2>
            <div className="ForecastItems">
  
            {this.formatCards()}
  
          </div>
        </div>
      )
    }
  }

  export default WeekContainer


  

  

