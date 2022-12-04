import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="col">
      <div className="card-body border m-1 rounded">
        <div className="weatherForecast">
          <div className="forecast-day">
            <div className="forecast-tempHigh">{props.name} C°</div>
            <div className="forecast-tempLow">
              <img
                src="http://openweathermap.org/img/wn/03d@2x.png"
                alt=""
                width="25"
              />
              C°
            </div>
            <hr />
          </div>
          <div className="forecast-day">
            <div className="forecast-tempHigh">Day C°</div>
            <div className="forecast-tempLow">
              <img
                src="http://openweathermap.org/img/wn/03d@2x.png"
                alt=""
                width="25"
              />
              C°
            </div>
            <hr />
          </div>
          <div className="forecast-day">
            <div className="forecast-tempHigh">Day C°</div>
            <div className="forecast-tempLow">
              <img
                src="http://openweathermap.org/img/wn/03d@2x.png"
                alt=""
                width="25"
              />
              C°
            </div>
            <hr />
          </div>
          <div className="forecast-day">
            <div className="forecast-tempHigh">Day C°</div>
            <div className="forecast-tempLow">
              <img
                src="http://openweathermap.org/img/wn/03d@2x.png"
                alt=""
                width="25"
              />
              C°
            </div>
            <hr />
          </div>
          <div className="forecast-day">
            <div className="forecast-tempHigh">Day C°</div>
            <div className="forecast-tempLow">
              <img
                src="http://openweathermap.org/img/wn/03d@2x.png"
                alt=""
                width="25"
              />
              C°
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
