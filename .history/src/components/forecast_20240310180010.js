import React, { useState, useEffect } from 'react';
import { WEATHER_API_URL, WEATHER_API_KEY } from '../api';
import './forecast.css';



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



  class WeekContainer extends React.Component {
    weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ru&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27";

    state = {
      days: []
    }
    
    fetchData = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&units=metric&appid=${WEATHER_API_KEY}`
            );
            setWeatherData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect = () =>  {
        fetchData();
    }, [props.city];


    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    };
  
    componentDidMount = () => {
      fetch(this.weatherURL)
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


  

  

