import React from "react";


export default function WeatherForecastPreview(props) {
    function hours() {
        let days = [
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"];

        let date = new Date(props.data.dt * 1000);
        let day = days[date.getDay()];
        return `${day}`
    }

    return (
        <div className="WeatherForecastPreview col">
            {hours()}
         <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt={props.data.weather[0].description} className="WeatherIcon" />
            {Math.round(props.data.main.temp)}°F
        </div>
    )
}


// make current location button work
// format search form
// format todays forecast area to be a list and add spacing
