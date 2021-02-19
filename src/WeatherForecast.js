import React, { useState } from "react";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";
import "./WeatherForecast.css";


export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);


function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
    
}

if (loaded && props.city === forecast.city.name) {
    console.log(forecast);
    return (
        <div className="WeatherForecast row">
                <WeatherForecastPreview data={forecast.list[0]}/>
                <WeatherForecastPreview data={forecast.list[1]}/>
                <WeatherForecastPreview data={forecast.list[2]}/>
                <WeatherForecastPreview data={forecast.list[3]}/>
                <WeatherForecastPreview data={forecast.list[4]}/>

             </div>
    )
} else {
    
    let apiKey = "5cb1aa65264597e34c41305199c5cf9e";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`
    axios.get(url).then(handleForecastResponse);
    
    return null;
}
}


