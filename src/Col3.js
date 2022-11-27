import React from "react";
import "./Col3.css";

export default function Col4() {
  return (
    <div className="col-3">
      <div className="card-body border m-1 rounded">
        <div className="weatherForecast" id="weatherForecast">
          <span className="forecast-day" id="forecast-day">
            <span>Day </span>
            <span className="forecast-tempHigh">C°</span>
            <br />
            <img
              src="http://openweathermap.org/img/wn/03d@2x.png"
              alt=""
              width="25"
            />
            <span className="forecast-tempLow" id="forecast-tempLow">
              {" "}
              C°
            </span>
            <hr />
          </span>
          <span className="forecast-day" id="forecast-day">
            <span>Day </span>
            <span class="forecast-tempHigh">C°</span>
            <br />
            <img
              src="http://openweathermap.org/img/wn/03d@2x.png"
              alt=""
              width="25"
            />
            <span className="forecast-tempLow" id="forecast-tempLow">
              {" "}
              C°
            </span>
            <hr />
          </span>
          <span className="forecast-day" id="forecast-day">
            <span>Day </span>
            <span class="forecast-tempHigh">C°</span>
            <br />
            <img
              src="http://openweathermap.org/img/wn/03d@2x.png"
              alt=""
              width="25"
            />
            <span className="forecast-tempLow" id="forecast-tempLow">
              {" "}
              C°
            </span>
            <hr />
          </span>
          <span className="forecast-day" id="forecast-day">
            <span>Day </span>
            <span className="forecast-tempHigh">C°</span>
            <br />
            <img
              src="http://openweathermap.org/img/wn/03d@2x.png"
              alt=""
              width="25"
            />
            <span className="forecast-tempLow" id="forecast-tempLow">
              {" "}
              C°
            </span>
            <hr />
          </span>
          <span className="forecast-day" id="forecast-day">
            <span>Day </span>
            <span class="forecast-tempHigh">C°</span>
            <br />
            <img
              src="http://openweathermap.org/img/wn/03d@2x.png"
              alt=""
              width="25"
            />
            <span className="forecast-tempLow" id="forecast-tempLow">
              {" "}
              C°
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
