import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import DateNTime from "./DateNTime";
import Description from "./Description";

export default function Form(props) {
  let [city, setCity] = useState("");
  let [cityName, setCityName] = useState("");
  let [temp, setTemp] = useState(null);
  let [description, setDescription] = useState("");
  let [humid, setHumid] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState("");
  let [feels, setFeels] = useState(null);
  let [highTemp, sethighTemp] = useState(null);
  let [lowTemp, setlowTemp] = useState(null);

  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let nowTime = new Date();
  let day1 = week[nowTime.getDay()];

  let hours = nowTime.getHours();
  if (hours < 10) {
    hours = `0{hours}`;
  }
  let minut = nowTime.getMinutes();
  if (minut < 10) {
    minut = `0{minut}`;
  }

  let fulldate = nowTime.getDate();
  let month1 = nowTime.getMonth() + 1;
  let year = nowTime.getFullYear();

  function handleResponse(response) {
    setTemp(response.data.main.temp);
    setCityName(response.data.name);
    setDescription(response.data.weather[0].description);
    setHumid(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
    setFeels(response.data.main.feels_like);
    sethighTemp(response.data.main.temp_max);
    setlowTemp(response.data.main.temp_min);
  }

  function showCity(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=454b3c15e44c7f345644cf4c8c057675&units=metric&lang=eng`;
    axios.get(url).then(handleResponse);
    props.updateData(city);
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
          <div className="col-7">
            <DateNTime
              city="Stokenchurch"
              temp={3}
              icon="http://openweathermap.org/img/wn/03d@2x.png"
              day={day1}
              time=<div>
                {hours}:{minut}
              </div>
              date=<div>
                {fulldate}/{month1}/{year}
              </div>
            />
          </div>
          <div className="col-5">
            <Description
              humid={83}
              wind={7}
              descrip="Cloudy day"
              feels={3}
              highTemp={7}
              lowTemp={1}
            />
          </div>
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
          <div className="col-6">
            <DateNTime
              city={cityName}
              temp={Math.round(temp)}
              icon={icon}
              day={day1}
              time=<div>
                {hours}:{minut}
              </div>
              date=<div>
                {fulldate}/{month1}/{year}
              </div>
            />
          </div>
          <div className="col-6">
            <Description
              humid={humid}
              wind={Math.round(wind)}
              descrip={description}
              feels={Math.round(feels)}
              highTemp={Math.round(highTemp)}
              lowTemp={Math.round(lowTemp)}
            />
          </div>
        </div>
      </div>
    );
  }
}
