import { useState, useEffect } from 'react';
import './forecast.css';

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
        // Функция для загрузки данных о прогнозе погоды
        async function fetchForecast() {
            try {
                const response = await fetch(`API_URL_HERE`);
                const data = await response.json();
                // Здесь data содержит данные о прогнозе погоды на ближайшие 5 дней
                // Например, data.list может содержать прогнозы на каждый из этих дней

                // Обновляем состояние forecastData с полученными данными
                setForecastData(data.list);
            } catch (error) {
                console.error('Error fetching forecast:', error);
            }
        }

        // Вызываем функцию загрузки данных о прогнозе при монтировании компонента
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
