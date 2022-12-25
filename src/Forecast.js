import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";

/*function forecastDay(dayNum) {
    let date = new Date(dayNum * 1000);
    let day = date.getDay();
    let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekDays[day];
  }

  function showForecast(response) {
    let [forecast, setForecast] = useState("");

    setForecast(response.data.daily);
   
   forecast.forEach(function (forecast, index) {
      if (index < 5 && index > 0) {
        forecastHTML += `<span class="forecast-day" id="forecast-day">
        ${forecastDay(
          forecast.dt
        )}</span> <span class="forecast-tempHigh">${Math.round(
          forecast.temp.max
        )}&#176</span><br>
        <img src="http://openweathermap.org/img/wn/${
          forecast.weather[0].icon
        }@2x.png" alt="" width="25"/>
        <span class="forecast-tempLow" id = "forecast-tempLow"> ${Math.round(
          forecast.temp.min
        )}&#176</span><hr>`;
      } else if (index === 5) {
        forecastHTML += `<span class="forecast-day" id="forecast-day">
        ${forecastDay(
          forecast.dt
        )}</span> <span class="forecast-tempHigh">${Math.round(
          forecast.temp.max
        )}&#176</span><br>
        <img src="http://openweathermap.org/img/wn/${
          forecast.weather[0].icon
        }@2x.png" alt="" width="25"/>
        <span class="forecast-tempLow" id = "forecast-tempLow"> ${Math.round(
          forecast.temp.min
        )}&#176</span>`;
      }
    });
*/
export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [dailyForecast, setDailyForecast] = useState(null);
  function showForecast(response) {
    setLoaded(true);
    setDailyForecast(response.data.daily);
    console.log(response.data.daily);
  }
  if (loaded) {
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
  } else {
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    let key = "454b3c15e44c7f345644cf4c8c057675";
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=eng`;
    axios.get(apiUrl).then(showForecast);

    return `Loaded...`;
  }
}
