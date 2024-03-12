
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

    // define the function that finds the users geolocation
    const getUserLocation = () => {
      // if geolocation is supported by the users browser
      if (navigator.geolocation) {
        // get the current users location
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // save the geolocation coordinates in two variables
            const { latitude, longitude } = position.coords;
            // update the value of userlocation variable
            setUserLocation({ latitude, longitude });
          },
          // if there was an error getting the users location
          (error) => {
            console.error('Error getting user location:', error);
          }
        );
      }
      // if geolocation is not supported by the users browser
      else {
        console.error('Geolocation is not supported by this browser.');
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
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <form className='form'>
                    <input onChange={setCityHandler} type="text" name="text"
                        placeholder="Search for your preferred city..." pattern="[A-Za-z\s]+"
                        title="Only letters and spaces are allowed" />
                </form>
                <button onClick={getUserLocation}>Get User Location</button>
                {/* if the user location variable has a value, print the users location */}
                {userLocation && (
                    <div>
                    <h2>User Location</h2>
                    <p>Latitude: {userLocation.latitude}</p>
                    <p>Longitude: {userLocation.longitude}</p>
                    </div>)}
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


