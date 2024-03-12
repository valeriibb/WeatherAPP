import { WEATHER_API_KEY } from "./api";
const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&lang=ru&units=metric&APPID=${WEATHER_API_KEY}`;
  
        
    fetch(weatherURL)
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
    })
    .then(data => {
    data.list.forEach(item => {
        console.log(item.dt_txt, `${item.main.temp.toFixed(0)}°C`, item.weather[0].description);
    });
    })
    .catch(error => {
    console.error('Exception (forecast):', error);
    });

