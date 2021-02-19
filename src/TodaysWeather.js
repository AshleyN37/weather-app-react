import React, { useState } from "react";
import axios from "axios";
import "./TodaysWeather.css"


export default function TodaysWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].main,
      date: "Monday 02:10",
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      weatherIcon: "https://ssl.gstatic.com/onebox/weather/64/snow_s_cloudy.png"

    });
  }


  if (weatherData.ready) {
    return (
    <div className="Form">
      <form className="search-form">
        <input
          type="search"
          placeholder="Enter a city..."
          autocomplete="off"
          autofocus="on"
          className="form-control"
          id="search-input"
        />

        <input type="submit" value="Search" className="btn btn-primary" />
        <input type="button" value="Current Location" class="btn btn-secondary" />
      </form>
      <h1 className="current-city">{weatherData.city}</h1>

      
    <img
            src={weatherData.weatherIcon}
            alt={weatherData.description}
            className="WeatherIcon"
          />
          <div className="CurrentTemperature">{Math.round(weatherData.temperature)} <sup>
            <a href="#" id="farenheit" className="active">
                        °F 
                </a> | 
                <a href="#" id="celsius">
                    °C
                </a>
            </sup>  </div>
      <div className="row justify-content-center">
        <div className="col-3">
          <div className="TodaysWeather">
          <div>{weatherData.date}</div>
              <div className="WeatherDescription text-capitalize">
      {weatherData.description}
    </div>
          </div>
        </div>

        <div className="col-3 FeelsHumWind">
          <div className="FeelsLike">
      Feels Like: {weatherData.feelsLike}°
    </div>
            <div className="Humidity">
      Humidity: {weatherData.humidity}%
    </div>
            <div className="Wind">
      Wind: {weatherData.wind} mph
    </div>
        </div>
      </div>
      </div>
  );

  } else {
    let apiKey = "5cb1aa65264597e34c41305199c5cf9e";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);

    return "Loading"
  }

}
