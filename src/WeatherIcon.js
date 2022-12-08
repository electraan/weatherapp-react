import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  /*const codeMapping = {
        'CLEAR_DAY',
    'CLEAR_NIGHT',
    'PARTLY_CLOUDY_DAY',
    'PARTLY_CLOUDY_NIGHT',
    'CLOUDY',
    'RAIN',
    'SLEET',
    'SNOW',
    'WIND',
    "50d": "FOG"*/

  return (
    <div className="icon">
      <ReactAnimatedWeather
        icon="PARTLY_CLOUDY_NIGHT"
        color="#2d5e8d"
        size={150}
        animate={true}
      />
    </div>
  );
}
