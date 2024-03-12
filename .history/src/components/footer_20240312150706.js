import React, { useState, useEffect } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../api";
import axios from "axios";
import './weatherdata.css';

export  function Footer() {
    return (
        <div className='Footer'>
         <h2>Created by Velerii Bokoch</h2>
        </div>
    );
}