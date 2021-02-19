import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherData(props) {
    return (
        <div className="WeatherData">

            <h1 className="current-city">{props.data.city}</h1>

      
    <img
            src={props.data.weatherIcon}
            alt={props.data.description}
            className="WeatherIcon"
            />
          <div className="CurrentTemperature">{Math.round(props.data.temperature)} <sup>
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
          <div>
            <FormattedDate date={props.data.date} />
          </div>
              <div className="WeatherDescription text-capitalize">
      {props.data.description}
    </div>
          </div>
        </div>

        <div className="col-3 FeelsHumWind">
          <div className="FeelsLike">
      Feels Like: {Math.round(props.data.feelsLike)}°
    </div>
            <div className="Humidity">
      Humidity: {props.data.humidity}%
    </div>
            <div className="Wind">
      Wind: {Math.round(props.data.wind)} mph
    </div>
        </div>
      </div>
            </div>
    )
}