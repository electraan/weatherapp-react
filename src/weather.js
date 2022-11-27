import React from "react";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )} °`
    );
  }

  let key = "454b3c15e44c7f345644cf4c8c057675";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&lang=eng`;

  axios.get(`${apiUrl}&appid=${key}`).then(handleResponse);
  return (
    <BallTriangle
      height={80}
      width={80}
      radius={5}
      color="#f47e60"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle=""
      visible={true}
    />
  );
}
