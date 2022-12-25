import React, { useState } from "react";
import "./DateNTime.css";
import WeatherIcon from "./WeatherIcon";

export default function DateNTime(props) {
  let [temp, setTemp] = useState("celsius");
  function convertTempBack(event) {
    event.preventDefault();
    setTemp("celsius");
  }

  function convertTemperature(event) {
    event.preventDefault();
    setTemp("farengheit");
  }

  if (temp === "celsius") {
    return (
      <div className="col">
        <WeatherIcon icon={props.icon} />
        <h1>
          <div className="temperature">
            {props.temp}
            <a href="/" onClick={convertTempBack}>
              °C
            </a>{" "}
            /
            <a href="/" onClick={convertTemperature}>
              °F
            </a>
          </div>
          <div className="city-name">{props.city}</div>
          <small>
            <em>
              <div>{props.day}</div>
              <div>{props.date}</div>
              <div>{props.time}</div>
            </em>
          </small>
        </h1>
      </div>
    );
  } else {
    let farengheit = (props.temp * 9) / 5 + 32;
    return (
      <div className="col">
        <WeatherIcon icon={props.icon} />
        <h1>
          <div className="temperature">
            {Math.round(farengheit)}
            <a href="/" onClick={convertTempBack}>
              °C
            </a>{" "}
            /
            <a href="/" onClick={convertTemperature}>
              °F
            </a>
          </div>
          <div className="city-name">{props.city}</div>
          <small>
            <em>
              <div>{props.day}</div>
              <div>{props.date}</div>
              <div>{props.time}</div>
            </em>
          </small>
        </h1>
      </div>
    );
  }
}
