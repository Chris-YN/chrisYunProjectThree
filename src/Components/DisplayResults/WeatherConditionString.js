


// WeatherConditionString.js
// import { useState } from "react";


// const [ weatherString, setWeatherString ] = useState("");

const WeatherConditionString = (props) => {
  let weatherString = ""

  if (props.weatherIconName === "01d" || "01n"){
    weatherString = "Clear Sky"
  }  else if (props.weatherIconName === "02d" || "02n") {
    weatherString = "Few Clouds"
  } else if (props.weatherIconName === "03d" || "03n") {
    weatherString = "Scattered Clouds"
  } else if (props.weatherIconName === "04d" || "04n") {
    weatherString = "Broken Clouds"
  } else if (props.weatherIconName === "09d" || "09n") {
    weatherString = "Shower Rain"
  } else if (props.weatherIconName === "10d" || "10n") {
    weatherString = "Rain"
  } else if (props.weatherIconName === "11d" || "11n") {
    weatherString = "Thunderstorm"
  } else if (props.weatherIconName === "13d" || "13n") {
    weatherString = "Snow"
  } else if (props.weatherIconName === "50d" || "50n") {
    weatherString = "Mist"
  }
  return (
    <p>{weatherString}</p>
  );
};

export default WeatherConditionString;