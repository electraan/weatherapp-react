import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./OneDay.css";

export default function OneDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp} C°`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp} C°`;
  }

  function forecastDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekDays[day];
  }

  return (
    <div>
      <div className="forecast-day">
        <div className="forecast-tempHigh">
          {forecastDay()} {maxTemp()}
        </div>
        <div className="forecast-tempLow">
          <WeatherIcon icon={props.data.weather[0].icon} size={25} />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {minTemp()}
        </div>
      </div>
    </div>
  );
}
