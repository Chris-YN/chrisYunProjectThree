


// WeatherConditionString.js
// import { useState } from "react";


// const [ weatherString, setWeatherString ] = useState("");

const WeatherConditionString = (props) => {
  let weatherString = ""

  if (props.weatherIconName === "01d"){
    weatherString = "Clear Sky"
  } else if (props.weatherIconName === "01n") {
    weatherString = "Clear Sky"
  } else if (props.weatherIconName === "02d") {
    weatherString = "Few Clouds"
  } else if (props.weatherIconName === "02n") {
    weatherString = "Few Clouds"
  } else if (props.weatherIconName === "03d") {
    weatherString = "Scattered Clouds"
  } else if (props.weatherIconName === "03n") {
    weatherString = "Scattered Clouds"
  } else if (props.weatherIconName === "04d") {
    weatherString = "Broken Clouds"
  } else if (props.weatherIconName === "04n") {
    weatherString = "Broken Clouds"
  } else if (props.weatherIconName === "09d") {
    weatherString = "Shower Rain"
  } else if (props.weatherIconName === "09n") {
    weatherString = "Shower Rain"
  } else if (props.weatherIconName === "10d") {
    weatherString = "Rain"
  } else if (props.weatherIconName === "10n") {
    weatherString = "Rain"
  } else if (props.weatherIconName === "11d") {
    weatherString = "Thunderstorm"
  } else if (props.weatherIconName === "11n") {
    weatherString = "Thunderstorm"
  } else if (props.weatherIconName === "13d") {
    weatherString = "Snow"
  } else if (props.weatherIconName === "13n") {
    weatherString = "Snow"
  } else if (props.weatherIconName === "50d") {
    weatherString = "Mist"
  } else if (props.weatherIconName === "50n") {
    weatherString = "Mist"
  }
  
  return (
    <p>{weatherString}</p>
  );
};

export default WeatherConditionString;