import { useState, useEffect } from 'react';
import './forecast.css';
import { WEATHER_API_KEY, WEATHER_API_URL } from "../api";

function ForItem(props) {
    return (
        <div className='ForItems'>
            <img src={props.img} alt=""/>
            <h3>{props.data}</h3>
            <h3>{props.text}</h3>
        </div>
    );
}

export default function Forecast() {
    const [forecastData, setForecastData] = useState([]);

    useEffect(() => {
        async function fetchForecast() {
            try {
                const apiKey = 'YOUR_API_KEY';
                const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=YOUR_CITY&appid=${WEATHER_API_KEY}`);
                const data = await response.json();
                // Получаем данные о погоде на ближайшие 5 дней
                // Важно: API OpenWeatherMap возвращает прогноз на каждые 3 часа,
                // поэтому вам может потребоваться обработать эти данные
                // и выбрать нужные даты для отображения

                // Обновляем состояние forecastData с полученными данными
                setForecastData(data.list);
            } catch (error) {
                console.error('Error fetching forecast:', error);
            }
        }

        fetchForecast();
    }, []);

    return (
        <div className="Forecast">
            <h2>5 Days Forecast:</h2>
            <div className="ForecastItems">
                {/* Отображаем каждый элемент прогноза из состояния forecastData */}
                {forecastData.map((forecast, index) => (
                    <ForItem 
                        key={index}
                        img='./clouds 1.png'  // Предположим, что это изображение для облаков
                        data={`${forecast.main.temp}°C`}  // Используем температуру из прогноза
                        text={forecast.dt_txt}  // Используем дату и время из прогноза
                    />
                ))}
            </div>
        </div>
    );
}
