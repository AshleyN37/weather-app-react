import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("fahrenheit");
    
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    
    if (unit === "fahrenheit") {
        return (
            <div className="WeatherTemperature">
                <span className="temperature">
                    {Math.round(props.fahrenheit)}
                </span>
                <span className="unit">
                    °F | {" "}
                    <a href="/" onClick={showCelsius}>
                        °C
                    </a>
                </span>
            </div>
            )
        } else {
    let celsiusTemperature = (props.fahrenheit - 32) * 5/9;
            
        return (
            <div className="WeatherTemperature">
                <span className="temperature">
                    {Math.round(celsiusTemperature)}
                    </span>
                    <span className="unit">
                        <a href="/" onClick={showFahrenheit}>
                            °F
                        </a>
                        | °C
                    </span>
                </div>
                );
            }
}

/* Add a way to convert feels like temp and mph to km/h
Add forecast
*/
