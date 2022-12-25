import React, { useEffect, useState } from "react";
import "./Forecast.css";
import axios from "axios";
import OneDay from "./OneDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [dailyForecast, setDailyForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function showForecast(response) {
    setLoaded(true);
    setDailyForecast(response.data.daily);
  }
  if (loaded) {
    return (
      <div className="col">
        {dailyForecast.map(function (dailyShows, index) {
          if (index > 0 && index < 6)
            return (
              <div className="card-body border m-1 rounded" key={index}>
                <OneDay data={dailyShows} />
              </div>
            );
          return null;
        })}
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
