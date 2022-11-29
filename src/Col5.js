import React from "react";
import "./Col5.css";

export default function Col5(props) {
  let mainInfo = {
    day: "Saturday",
    date: "08/11/2022",
    time: "17:24",
  };
  return (
    <div className="col-5">
      <span className="icon">
        <img src={props.icon} alt="weather icon" id="icon" width="160"></img>
      </span>
      <h1>
        <span className="temperature">{props.temp} </span>
        <a href="/">°C</a> /<a href="/">°F</a>
      </h1>

      <h1>
        <span className="city-name">{props.city}</span>
        <br />
        <small>
          <em>
            <span>{props.day}</span>
            <br />
            <span> {mainInfo.date}</span>
            <br />
            <span>
              {props.time}:{props.time2}
            </span>
          </em>
        </small>
      </h1>
    </div>
  );
}
