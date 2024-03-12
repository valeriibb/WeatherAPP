import React, { useState, useEffect } from 'react';
import { WEATHER_API_URL, WEATHER_API_KEY } from '../api';
import './forecast.css';


const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ru&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27";

function Card (props) {
    // Props: day, key(index)
  
      const imgURL = "owf owf-"+ this.props.day.weather[0].id +" owf-5x icon-style"

      const ms = props.day.dt * 1000;
      const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});
  
  
  
  
      return (
        <div className='ForItems'>

            <i className={imgURL}></i>

            <h3>{weekdayName}</h3>
            <h2>{Math.round(day.main.temp)} °C</h2>
           
          </div>
      )
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


  

  

