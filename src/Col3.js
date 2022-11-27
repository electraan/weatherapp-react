import React from "react";
import "./Col3.css";
import Col from "react-bootstrap/Col";

export default function Col3() {
  return (
    <Col sm={3}>
      <div className="col-3">
        <div className="card-body border m-1 rounded">
          <div className="weatherForecast">
            <span className="forecast-day">
              <span>Day </span>
              <span className="forecast-tempHigh">C°</span>
              <br />
              <img
                src="http://openweathermap.org/img/wn/03d@2x.png"
                alt=""
                width="25"
              />
              <span className="forecast-tempLow"> C°</span>
              <hr />
            </span>
            <span className="forecast-day">
              <span>Day </span>
              <span class="forecast-tempHigh">C°</span>
              <br />
              <img
                src="http://openweathermap.org/img/wn/03d@2x.png"
                alt=""
                width="25"
              />
              <span className="forecast-tempLow"> C°</span>
              <hr />
            </span>
            <span className="forecast-day">
              <span>Day </span>
              <span class="forecast-tempHigh">C°</span>
              <br />
              <img
                src="http://openweathermap.org/img/wn/03d@2x.png"
                alt=""
                width="25"
              />
              <span className="forecast-tempLow"> C°</span>
              <hr />
            </span>
            <span className="forecast-day">
              <span>Day </span>
              <span className="forecast-tempHigh">C°</span>
              <br />
              <img
                src="http://openweathermap.org/img/wn/03d@2x.png"
                alt=""
                width="25"
              />
              <span className="forecast-tempLow"> C°</span>
              <hr />
            </span>
            <span className="forecast-day">
              <span>Day </span>
              <span class="forecast-tempHigh">C°</span>
              <br />
              <img
                src="http://openweathermap.org/img/wn/03d@2x.png"
                alt=""
                width="25"
              />
              <span className="forecast-tempLow"> C°</span>
            </span>
          </div>
        </div>
      </div>
    </Col>
  );
}
