


// DisplayResults.js
import Images from "../../Styles/Assets/Images.js";
import WeatherConditionString from "./WeatherConditionString.js";



const DisplayResults = ({ responseObject }) => {
  
  // saving weather icon code from response to a variable to be used in jsx
  const weatherIconName = responseObject.weatherIcon;
  // saving air quality index to a variable to be used in color changer
  const aqi = responseObject.aqi;
  let aqiExplanationString = "";



  //=====  background gradient changer  =====//
  // function to change gradient color of .wrapper
  const colorChange = (color)=>{
    document.documentElement.style.setProperty("--aqiColor", color);
  }



  // else if statments to set color depending on 
    // Air Quality index number returned from API call.
  if(aqi <= 50) {
    aqiExplanationString = "  Green - Air quality is Good";
    colorChange("#a8e160");
  } else if(aqi <= 100) {
    aqiExplanationString = ",  Yellow - Air quality is Moderate";
    colorChange("#fcd74b");
  } else if (aqi <= 150) {
    aqiExplanationString = ",  Orange - Unhealthy for Sensative Groups";
    colorChange("#fe9b57");
  } else if (aqi <= 200) {
    aqiExplanationString = ",  Red - Air quality is Unhealthy";
    colorChange("#fe6a6a");
  } else if (aqi <= 300) {
    aqiExplanationString = ",  Purple - Air quality is very Unhealthy";
    colorChange("#a97bbc");
  } else if (aqi <= 500) {
    aqiExplanationString = ",  Maroon - Air quality is Hazardous";
    colorChange("#a87383");
  }
  // console.log(WeatherConditionString);


  //=====  JSX  =====//
  return(
    <div className="SearchResult">
      
      {/* turnary expression to not display anything until search is ran */}
      {responseObject.aqi === undefined ?
        (
          <p></p>
        ) : (
          <div className="resultContainer">
            <ul className="resultUl">
              <li>Air Quality Index:</li>
              <li>{responseObject.aqi}{aqiExplanationString}</li>
              <li>Humidity: {responseObject.humidity}</li>
              <li>Temperature: {responseObject.temperature}&deg;C</li>
              <li><WeatherConditionString weatherIconName={weatherIconName}/></li>
            </ul>

            {/* image will display according to weather icon code returned */}
            <img src={Images[weatherIconName]} alt={<WeatherConditionString weatherIconName={weatherIconName}/>} />
          </div>
        )
      }
    </div>
  );
}

export default DisplayResults;