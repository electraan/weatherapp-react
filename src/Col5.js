import React from "react";
import Form from "./Form";
import "./Col5.css";
import Col from "react-bootstrap/Col";

export default function Col5() {
  let mainInfo = {
    city: "Kyiv",
    day: "Saturday",
    date: "08/11/2022",
    time: "17:24",
  };
  return (
    <Col sm={5}>
      <div className="col-5">
        <Form />
        <span className="icon">
          <img
            src="http://openweathermap.org/img/wn/03d@2x.png"
            alt="weather icon"
            id="icon"
            width="160"
          ></img>
        </span>
        <h1>
          <span className="temperature">19 </span>
          <a href="/">°C</a> /<a href="/">°F</a>
        </h1>
        <br />
        <h1>
          <span className="city-name">{mainInfo.city}</span>
          <br />
          <small>
            <em>
              <span>{mainInfo.day}</span>
              <br />
              <span> {mainInfo.date}</span>
              <br />
              <span>{mainInfo.time}</span>
            </em>
          </small>
        </h1>
      </div>
    </Col>
  );
}
