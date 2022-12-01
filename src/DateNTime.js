import React from "react";
import "./DateNTime.css";

export default function DateNTime(props) {
  return (
    <div className="col">
      <div className="icon">
        <img src={props.icon} alt="weather icon" id="icon" width="160"></img>
      </div>
      <h1>
        <div className="temperature">
          {props.temp}
          <a href="/">°C</a> /<a href="/">°F</a>
        </div>
      </h1>

      <h1>
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
