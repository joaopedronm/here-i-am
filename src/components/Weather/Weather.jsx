// CSS
import './Weather.css'

// Packages
import { useEffect, useState } from "react";
import axios from "axios";

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faThermometer, faWater, faWind } from '@fortawesome/free-solid-svg-icons'

const Weather = ({position}) => {
  const [weatherData, setWeatherData] = useState(null);
  const lat = position.lat
  const lon = position.lng
  // Just as was done in the Map component, the position comes via App.jsx props

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY_OPEN_WEATHER}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeatherData();
  }, [lat, lon]); // Dependências do useEffect

  return (
    <div>
      {weatherData && (
        <div className='weatherContainer'>
          <h3>Region: {weatherData.name}</h3>
          <p><FontAwesomeIcon icon={faCloud} className='icon' />{weatherData.weather[0].description.toUpperCase()}</p>
          <p><FontAwesomeIcon icon={faThermometer} className='icon' /><b>Temperature</b>: {(weatherData.main.temp - 273.15).toFixed(1)}°C</p>
          <p><FontAwesomeIcon icon={faWater} className='icon' /><b>Humidity</b>: {parseInt(weatherData.main.humidity)}%</p>
          <p><FontAwesomeIcon icon={faWind} className='icon' /><b>Wind Speed</b>: {weatherData.wind.speed}km/h</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
