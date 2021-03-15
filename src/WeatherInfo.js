import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherData(props) {
    return (
    <div className="WeatherData">
      <h1 className="CurrentCity">{props.data.city}</h1>
      <div className="row">
      <div className="col-md-6">

      <img src={props.data.weatherIcon} alt={props.data.description} className="WeatherIcon" />
      

      <WeatherTemperature fahrenheit={props.data.temperature} />
   
                  </div>
            
            
                <div className="TodaysWeather col-md-6">
                  <div>
                    <FormattedDate date={props.data.date} />
                    </div>
                    <div className="WeatherDescription text-capitalize">
                      {props.data.description}
                      </div>
                    


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