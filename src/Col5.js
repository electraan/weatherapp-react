import React from "react";
import "./Col5.css";

export default function Col5(props) {
  return (
    <div className="col-5">
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
            <div>
              {props.time}:{props.time2}
            </div>
          </em>
        </small>
      </h1>
    </div>
  );
}
