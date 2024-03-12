import React, { useState, useEffect } from 'react';
import { WEATHER_API_URL, WEATHER_API_KEY } from '../api';
import './forecast.css';



function Card () {
    // Props: day, key(index)
  

      const ms = this.props.day.dt * 1000;
      const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});
  
  
  
  
      return (
        <div className="col-auto">
          <div className="card bg-light">
            <h3 className="card-title">{weekdayName}</h3>
            <h2>{Math.round(this.props.day.main.temp)} °C</h2>
           
          </div>
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
        <div className="">
        <h1 className="display-4 jumbotron">Прогноз погоды на 5 дней</h1>
        <h5 className="display-4 text-muted">Kiev</h5>
          <div className="row justify-content-center">
  
            {this.formatCards()}
  
          </div>
        </div>
      )
    }
  }

  
  

  

