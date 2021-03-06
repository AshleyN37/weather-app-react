import React, { useState } from "react";
import axios from "axios";
import "./WeatherSearchEngine.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast"

export default function WeatherSearchEngine(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      weatherIcon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function search() {
    let apiKey = "5cb1aa65264597e34c41305199c5cf9e";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(handleResponse);

  }

  function handleSubmit(event) {
    event.preventDefault();
    search();

  }

  function handleCity(event) {
    setCity(event.target.value);

  }


  if (weatherData.ready) {
    return (
    <div className="Form container">

      <form className="search-form" onSubmit={handleSubmit}>
      <div className="row">
      <div className="col-sm-9">


        <input
          type="search"
          placeholder="Enter a city..."
          autocomplete="off"
          autofocus="on"
          className="form-control"
          id="search-input"
          onChange={handleCity}
          />
          </div>


        <input type="submit" value="Search" className="btn btn-primary" />
          </div>

      </form>
      <WeatherInfo data={weatherData} />
      <WeatherForecast city={weatherData.city} />
  
      </div>
  );

  } else {
    search();
    return "Loading"
  }

}
