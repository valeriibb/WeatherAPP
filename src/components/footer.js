import React, { useState, useEffect } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../api";
import axios from "axios";
import './footer.css';

export  function Footer() {
    return (
        <div className='Footer'>
         <p>Created by Velerii Bokoch</p>
        </div>
    );
}