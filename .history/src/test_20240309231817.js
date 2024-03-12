

async function fetchWeatherForecast(cityId, appId) {
    try {
        const response = await fetch("http://api.openweathermap.org/data/2.5/forecast", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                'id': cityId,
                'units': 'metric',
                'lang': 'ru',
                'APPID': WEATHER_API_URL
            }
        });
        const data = await response.json();
        for (const forecast of data.list) {
            console.log(forecast.dt_txt, `${forecast.main.temp}°C`, forecast.weather[0].description);
        }
    } catch (error) {
        console.error("Exception (forecast):", error);
    }
}

// Используйте функцию fetchWeatherForecast для получения прогноза погоды
fetchWeatherForecast(cityId, appId);
