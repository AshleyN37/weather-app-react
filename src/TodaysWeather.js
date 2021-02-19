import React from "react";
import "./TodaysWeather.css"
import Date from "./Date";


export default function TodaysWeather() {
  return (
    <div>
       <img
            src="https://wikiclipart.com/wp-content/uploads/2017/02/Partly-cloudy-clipart-clipartfest.jpeg"
            alt="partly cloudy"
            className="WeatherIcon"
          />
          <div className="CurrentTemperature">37 <sup>
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
            <Date />
              <div className="WeatherDescription">
      Clouds
    </div>
          </div>
        </div>

        <div className="col-3 FeelsHumWind">
          <div className="FeelsLike">
      Feels Like: 27°
    </div>
            <div className="Humidity">
      Humidity: 41%
    </div>
            <div className="Wind">
      Wind: 8 mph
    </div>
        </div>
      </div>
    </div>
  );
}
