import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

const iconMap = {
  "01d": "CLEAR_DAY",
  "01n": "CLEAR_NIGHT",
  "02d": "PARTLY_CLOUDY_DAY",
  "02n": "PARTLY_CLOUDY_NIGHT",
  "03d": "CLOUDY",
  "03n": "CLOUDY",
  "04d": "CLOUDY",
  "04n": "CLOUDY",
  "09d": "RAIN",
  "09n": "RAIN",
  "10d": "RAIN",
  "10n": "RAIN",
  "11d": "SLEET",
  "11n": "SLEET",
  "13d": "SNOW",
  "13n": "SNOW",
  "50d": "FOG",
  "50n": "FOG",
};

export default function WeatherTemperature(props) {
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState("");

  // Substitua seu useEffect existente por este
  useEffect(() => {
    const fetchTemperature = async () => {
      const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c"; // Substitua pela sua chave da API real
      const units = "metric";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

      try {
        const response = await axios.get(apiUrl);
        setTemperature(Math.round(response.data.main.temp));
        setDescription(response.data.weather[0].description);
        setHumidity(response.data.main.humidity);
        setWind(response.data.wind.speed);
        const iconCode = response.data.weather[0].icon;
        const icon = iconMap[iconCode] || "CLEAR_DAY";
        setWeatherIcon(icon);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    if (props.city) {
      fetchTemperature();
    }
  }, [props.city]); // A dependência [props.city] indica que o useEffect é re-executado quando props.city muda

  // A lógica de renderização permanece a mesma
  if (temperature !== null) {
    return (
<<<<<<< Updated upstream
      <div className="ContainerTemperature">
        <ul>
          <li>Temperature: {temperature}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind} km/h</li>
          <li>
            <ReactAnimatedWeather
              icon={iconMap[weatherIcon] || "CLEAR_DAY"}
              color="goldenrod"
              size={64}
              animate={true}
            />
          </li>
        </ul>
=======
      <div className="Container-temperature">
        <div>
          <span>
            <h1 className="Weather-app-city">
              {props.city}, {temperature}°C
            </h1>
          </span>
          <p className="Weather-app-details">
            {" "}
            {description} today,
            <br />
            <span>humidity: {humidity}%</span>
            <br />
            <span>and wind: {wind} km/h</span>
          </p>
        </div>

        <p>
          <a href="https://www.npmjs.com/package/react-animated-weather"></a>
        </p>
        <div>
          <ReactAnimatedWeather
            icon={weatherIcon}
            color="#385170"
            size={90}
            animate={true}
          />
        </div>
>>>>>>> Stashed changes
      </div>
    );
  } else {
    return <h4>Loading temperature for {props.city}...</h4>;
  }
}
