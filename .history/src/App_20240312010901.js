
import logo from './logo.svg';
import './App.css';
import { useStateб  } from "react";
import Datetime from "./components/datetime";
import Weatherdata from "./components/weatherdata";
import Forecast from "./components/forecast";
import Hourly from "./components/hourly";
import WeekContainer from './components/forecast';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import axios from "axios";

function App() {
  const [city, setCity] = useState("Kiev");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Функция для получения города по координатам пользователя
    const getCityFromCoordinates = async (latitude, longitude) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${WEATHER_API_KEY}`
        );
        const data = response.data[0];
        const cityName = data?.name;
        if (cityName) {
          setCity(cityName.toLowerCase());
        }
      } catch (error) {
        console.error("Error getting user location:", error);
      }
    };

    // Функция для получения геолокации пользователя
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            getCityFromCoordinates(latitude, longitude);
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getUserLocation();
  }, []);

  const handleCityChange = (event) => {
    setCity(event.target.value.toLowerCase());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`
      );
      setCity(response.data.name.toLowerCase());
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError("City not found");
    }
  };

  return (
    <div className="App">
      <div className="top">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="city"
            placeholder="Search for your preferred city..."
            value={city}
            onChange={handleCityChange}
            pattern="[A-Za-z\s]+"
            title="Only letters and spaces are allowed"
          />
          <button type="submit">Search</button>
        </form>
        <button onClick={() => setCity("Kiev")}>Get User Location</button>
      </div>
      <div className="block">
        <Datetime city={city} />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
          <>
            <Weatherdata city={city} />
            <WeekContainer city={city} />
            <Hourly city={city} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
