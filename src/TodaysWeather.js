import React from "react";
import "./TodaysWeather.css"
import Date from "./Date";
import WeatherDescription from "./WeatherDescription";
import CurrentForecast from "./CurrentForecast";
import FeelsLike from "./FeelsLike";
import Humidity from "./Humidity";
import Wind from "./Wind";

export default function TodaysWeather() {
  return (
    <div>
      <CurrentForecast />
      <div className="row justify-content-center">
        <div className="col-3">
          <div className="TodaysWeather">
            <Date />
            <WeatherDescription />
          </div>
        </div>

        <div className="col-3 FeelsHumWind">
          <FeelsLike />
          <Humidity />
          <Wind />
        </div>
      </div>
    </div>
  );
}
