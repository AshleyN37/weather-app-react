import React from "react";
import "./CurrentForecast.css";

export default function CurrentForecast() {
  return (
    <div className="CurrentForecast">
          <img
            src="https://wikiclipart.com/wp-content/uploads/2017/02/Partly-cloudy-clipart-clipartfest.jpeg"
            alt="partly cloudy"
            className="WeatherIcon"
          />
          <div className="CurrentTemperature">37 °F | °C </div>
        </div>
  );
}
