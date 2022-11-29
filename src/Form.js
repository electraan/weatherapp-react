import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import Col5 from "./Col5";
import Col4 from "./Col4";
import Col3 from "./Col3";

export default function Form() {
  let [city, setCity] = useState("");
  let [temp, setTemp] = useState(null);
  let [description, setDescription] = useState("");
  let [humid, setHumid] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState("");
  let [feels, setFeels] = useState(null);
  let [highTemp, sethighTemp] = useState(null);
  let [lowTemp, setlowTemp] = useState(null);

  function handleResponse(response) {
    setTemp(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumid(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    setFeels(response.data.main.feels_like);
    sethighTemp(response.data.main.temp_max);
    setlowTemp(response.data.main.temp_min);
  }

  function showCity(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=454b3c15e44c7f345644cf4c8c057675&units=metric&lang=eng`;
    axios.get(url).then(handleResponse);
  }

  function newCity(event) {
    setCity(event.target.value);
  }
  if (!temp) {
    return (
      <div className="Form">
        <form className="form-name" onSubmit={showCity}>
          <input
            className="city"
            type="search"
            onChange={newCity}
            required
            placeholder="Enter city"
            autocomplete="off"
          ></input>
          <button type="submit"></button>
        </form>
        <div className="row">
          <Col5
            city="Stokenchurch"
            temp={3}
            icon="http://openweathermap.org/img/wn/03d@2x.png"
          />
          <Col4
            humid={83}
            wind={7}
            descrip="Cloudy day"
            feels={3}
            highTemp={7}
            lowTemp={1}
          />
          <Col3 />
        </div>
      </div>
    );
  } else {
    return (
      <div className="Form">
        <form className="form-name" onSubmit={showCity}>
          <input
            className="city"
            type="search"
            onChange={newCity}
            required
            placeholder="Enter city"
            autocomplete="off"
          ></input>
          <button type="submit"></button>
        </form>
        <div className="row">
          <Col5 city={city} temp={Math.round(temp)} icon={icon} />
          <Col4
            humid={humid}
            wind={Math.round(wind)}
            descrip={description}
            feels={Math.round(feels)}
            highTemp={Math.round(highTemp)}
            lowTemp={Math.round(lowTemp)}
          />
          <Col3 />
        </div>
      </div>
    );
  }
}
