
import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Datetime from "./components/datetime";
import Weatherdata from "./components/weatherdata";
import Forecast from "./components/forecast";
import Hourly from "./components/hourly";
import WeekContainer from './components/forecast';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';


export function App() {
    const [city_val, setCity_val] = useState('Kiev');
    const [userLocation, setUserLocation] = useState(null);

    const getUserLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              try {
                const { latitude, longitude } = position.coords;
                const city = await getCityFromCoordinates(latitude, longitude);
                setUserLocation(city);
              } catch (error) {
                console.error('Error getting user location:', error);
              }
            },
            (error) => {
              console.error('Error getting user location:', error);
            }
          );
        }
        else {
          console.error('Geolocation is not supported by this browser.');
        }
      };
      
      const getCityFromCoordinates = async (latitude, longitude) => {
        try {
          const response = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${WEATHER_API_KEY}`);
          const data = await response.json();
          const city = data[0]?.name;

          console.log(city)
          setCity_val(city)
        } catch (error) {
          throw new Error('Failed to fetch city name from coordinates.');
        }
      };
      
      

    function setCityHandler(event) {
        const cityName = event.target.value.toLowerCase();
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHER_API_KEY}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('City not found');
                }
                return response.json();
            })
            .then(data => {
                setCity_val(cityName);

            })
            .catch(error => {
                // Ловим ошибку, если город не найден
                setCity_val('');
            });
    }




    return (
        <div className="App">
            <div className="top">
                <form className='form'>
                    <input onChange={setCityHandler} type="text" name="text"
                        placeholder="Search for your preferred city..." pattern="[A-Za-z\s]+"
                        title="Only letters and spaces are allowed" />
                </form>
                <button onClick={getUserLocation}>
                    <img src="current location icon.png" alt=""></img>
                    Get User Location
                </button>
            </div>
            <div className="block">
                <Datetime city={city_val} />
                <Weatherdata city={city_val}/>
                <WeekContainer city={city_val}/>
                <Hourly city={city_val}/>
            </div>
        </div>
    );
}

export default App;


