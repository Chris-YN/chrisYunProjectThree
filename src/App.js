


import {useState, useEffect, useRef} from "react";
// axios not used in this version. it will be used at a later version.
// import axios from "axios" ;
import './App.css';
import SearchForms from "./SearchForms/SearchForms";
import DisplayResults from "./DisplayResults/DisplayResults";


function App() {
  // setting up const variables for the app
  const baseUrl = "https://api.airvisual.com/v2/city";
  const apiKey = "7d2a621e-555f-4192-9072-0289c034663c";

  // useState()
  // contry search is fixed to Canada in this version. option will be
      // added in a later version
  const [userCountryChoice, setUserCountryChoice] = useState("canada");
  const [searchTermArray, setSearchTermArray] = useState([]);
  const [responseObject, setResponseObject] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  // For API calls
    // useRef() used to create a ref that keep track of first render.
    // This stops api call to go off at initial page road.
  const didMount =useRef(false);
  useEffect( () => {
    if (didMount.current) {
      const testCallToApi = () => {
        const url = new URL(baseUrl);
        url.search = new URLSearchParams({
          key: apiKey,
          country: userCountryChoice,
          state: searchTermArray[0],
          city: searchTermArray[1],
        });

        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((jsonResult) => {
            // error handling for missspelled province/city names on submit
            if (jsonResult.status == "success"){
              setResponseObject({
                status: jsonResult.status,
                aqi: jsonResult.data.current.pollution.aqius,
                humidity: jsonResult.data.current.weather.hu,
                temperature: jsonResult.data.current.weather.tp,
                weatherIcon: jsonResult.data.current.weather.ic,
              })
            } else{
              console.log("do dolphins ever get bored? also you messed up your spelling");
              setErrorMessage("do dolphins ever get bored? also you messed up your spelling")

            }
          });
      };
      testCallToApi();
    } else {
      didMount.current = true;
    }
    console.log(responseObject)

  }, [searchTermArray]);

  const handleSubmit = (event, userProvinceChoice, userCityChoice) => {
    event.preventDefault();
    // error handling for empty input box on submit
    if (userProvinceChoice !== "" && userCityChoice !== ""){
      setErrorMessage("");
      setSearchTermArray([userProvinceChoice, userCityChoice]);
      
    } else {
      console.log("do monkeys really throw shit? also make sure you put stuff in the search box first");
    };
  }
  
  
  return (
    <div className="App">

      <SearchForms handleSubmit={ handleSubmit }/>
      <DisplayResults responseObject={responseObject}/>
      <p>{errorMessage}</p>


    </div>
  );
}

export default App;
