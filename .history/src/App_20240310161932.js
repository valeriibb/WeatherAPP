
import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Datetime from "./components/datetime";
import Weatherdata from "./components/weatherdata";
import Forecast from "./components/forecast";
import Hourly from "./components/hourly";


function App() {
    const [city_val, setCity_val] = useState('Kiev');

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
                <button>Current Location</button>
            </div>
            <div className="block">
                <Datetime city={city_val} />
                <Weatherdata city={city_val}/>
                <Forecast />
                <Hourly />
                <WeekContainer/>
            </div>
        </div>
    );
}

export default App;

