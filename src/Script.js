import React from "react";
/*import axios from "axios";*/
import "./styles.css";

export default function Script() {
  return (
    <div className="Script">
      <script src="src/index.js"></script>
      <span className="open-source">
        <a
          href="https://github.com/electraan/weatherapp-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code{" "}
        </a>
        by Antonina Ieremenko
      </span>
    </div>
  );
}

/*export default function Weather(props) {
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
}*/
