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
            <div className="card-body">
              <button>AAa</button>
            </div>
          </div>
        </div>
      )
  }




  

