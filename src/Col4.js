import React from "react";
import "./Col4.css";

export default function Col4(props) {
  return (
    <div className="col-4">
      <h6 className="wind">
        <em>
          <div className="highTemp">High temp: {props.highTemp}°C</div>
          <br />
          <div className="lowTemp">Low temp: {props.lowTemp}°C</div>
          <br />
          <div className="feelsLike">Feels like: {props.feels}°C</div>
          <br />
          <div className="humidity">Humidity: {props.humid} %</div>
          <br />
          <div className="windSpeed">Wind speed: {props.wind} km/h</div>
          <br />
          <div className="description">
            Description: It`s {props.descrip} now
          </div>
          <br />
        </em>
      </h6>
    </div>
  );
}
