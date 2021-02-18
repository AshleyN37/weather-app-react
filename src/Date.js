import React, { useState } from "react";
export default function Date() {
  const [currentDate, setCurrentDate] = useState('');


let days = [
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"];
        
        let day = days[new Date().getDay()];
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();

        setCurrentDate (
          `${day} ${hours}:${minutes}`
        );


return <div className="Date">
  {currentDate}
</div>;
}
