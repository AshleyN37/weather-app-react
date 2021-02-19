import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState("");
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);

  

  function handleResponse(response) {
    setTemperature(response.data,main.temp);
    setReady(true);
  }

  


  if (ready) {
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
          onChange={updateCity}
        />

        <input type="submit" value="Search" className="btn btn-primary" />
        <input type="button" value="Current Location" class="btn btn-secondary" />
      </form>
      {message}
    </div>
  );

  } else {
    let apiKey = "5cb1aa65264597e34c41305199c5cf9e";
    let city = "Washington, D.C." 
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);

    return "Loading"
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }






  
  function showWeather(response) {
    setMessage(
      <ul>
        <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
        <li>Description: {response.data.weather[0].main}</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {Math.round(response.data.wind.speed)}km/h</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt="weather"
          />
        </li>
      </ul>
    );
  }

  
}
