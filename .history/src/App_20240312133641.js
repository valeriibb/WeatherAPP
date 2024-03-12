
import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Datetime from "./components/datetime";
import Weatherdata from "./components/weatherdata";
import Forecast from "./components/forecast";
import Hourly from "./components/hourly";
import WeekContainer from './components/forecast';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import locale from '../'


export function App() {
    const [city_val, setCity_val] = useState('Kiev');
    const [userLocation, setUserLocation] = useState(null);

    const getUserLocation = () => {
        if (navigator.geolocation) {
          // get the current users location
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              try {
                // save the geolocation coordinates in two variables
                const { latitude, longitude } = position.coords;
                // Call reverse geocoding API to get city name from coordinates
                const city = await getCityFromCoordinates(latitude, longitude);
                // update the value of userlocation variable
                setUserLocation(city);
              } catch (error) {
                console.error('Error getting user location:', error);
              }
            },
            // if there was an error getting the users location
            (error) => {
              console.error('Error getting user location:', error);
            }
          );
        }
        // if geol ocation is not supported by the users browser
        else {
          console.error('Geolocation is not supported by this browser.');
        }
      };
      
      // Function to fetch city name from coordinates using reverse geocoding API
      const getCityFromCoordinates = async (latitude, longitude) => {
        try {
          const response = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${WEATHER_API_KEY}`);
          const data = await response.json();
          // Extract city name from response
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
                    // Если ответ не успешен, значит город не существует
                    throw new Error('City not found');
                }
                return response.json();
            })
            .then(data => {
                // Город существует, обновляем состояние
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
                    <img src="./public/current_location_icon.png" alt=""></img>
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


