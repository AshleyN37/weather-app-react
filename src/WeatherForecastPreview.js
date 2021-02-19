import React from "react";


export default function WeatherForecastPreview(props) {
    function hours() {
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours();
        return `${hours}:00`
    }

    return (
        <div className="WeatherForecastPreview col">
            {hours()}
         <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt={props.data.weather[0].description} className="WeatherIcon" />
            {Math.round(props.data.main.temp)}°F
        </div>
    )
}
