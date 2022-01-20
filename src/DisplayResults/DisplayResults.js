


// DisplayResults.js
const DisplayResults = ({ responseObject }) => {
  
  // function to change gradient color of .wrapper
  const colorChange = (color)=>{
    document.documentElement.style.setProperty("--aqiColor", color);
  }

  const aqi = responseObject.aqi;
  if(aqi <= 50) {
    colorChange("#a8e160");
  } else if(aqi <= 100) {
    colorChange("#fcd74b");
  } else if (aqi <= 150) {
    colorChange("#fe9b57");
  } else if (aqi <= 200) {
    colorChange("#fe6a6a");
  } else if (aqi <= 300) {
    colorChange("#a97bbc");
  } else if (aqi <= 500) {
    colorChange("#a87383");
  }
  return(
    <div className="SearchResult">
      <h2>results here</h2>
      <ul>
        <li>{ responseObject.aqi }</li>
        <li>{ responseObject.humidity }</li>
        <li>{ responseObject.temperature }</li>
        <li>{ responseObject.weatherIcon }</li>

      </ul>
    </div>
  );
}

export default DisplayResults;