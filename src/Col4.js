import React from "react";
import "./Col4.css";
import Col from "react-bootstrap/Col";

export default function Col4() {
  let nowInfo = {
    highTemp: "19°",
    lowTemp: "8°",
    feelsLike: "8°",
    humidity: "78",
    windSpeed: "5 ",
    description: "Clear sky",
  };
  return (
    <Col sm={4}>
      <div className="col-4">
        <h6 className="wind">
          <em>
            <span id="highTemp">High temp: {nowInfo.highTemp}</span>
            <br />
            <br />
            <span id="lowTemp">Low temp: {nowInfo.lowTemp}</span>
            <br />
            <br />
            <span id="feelsLike">Feels like: {nowInfo.feelsLike}</span>
            <br />
            <br />
            <span id="humidity">Humidity: {nowInfo.humidity}%</span>
            <br />
            <br />
            <span id="windSpeed">Wind speed: {nowInfo.windSpeed}km/h</span>
            <br />
            <br />
            <span className="description" id="description">
              Description: It`s {nowInfo.description} now
            </span>
            <br />
          </em>
        </h6>
      </div>
    </Col>
  );
}
