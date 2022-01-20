


// DisplayResults.js
const DisplayResults = ({ responseObject }) => {
  return(
    <div className="SearchResult">
      <h2>resuilts here</h2>
      <ul>
        <li>{ responseObject.aqi }</li>
        <li>{responseObject.humidity }</li>
        <li>{responseObject.temperature }</li>
        <li>{responseObject.weatherIcon }</li>
      </ul>
    </div>
  );
}

export default DisplayResults;