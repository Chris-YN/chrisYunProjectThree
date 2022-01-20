


// App.js
//=====  imports  =====//
import {useState, useEffect, useRef} from "react";
// axios not used in this version. it will be used at a later version.
// import axios from "axios" ;
import './Styles/Sass/App.scss';
import SearchForms from "./SearchForms/SearchForms";
import DisplayResults from "./DisplayResults/DisplayResults";



function App() {
  //=====  variables  =====/
  const baseUrl = "https://api.airvisual.com/v2/city";
  const apiKey = "7d2a621e-555f-4192-9072-0289c034663c";



  //=====  useState  =====//
    // contry search is fixed to Canada in this version. option will be
      // added in a later version
  const [userCountryChoice, setUserCountryChoice] = useState("canada");
  const [searchTermArray, setSearchTermArray] = useState([]);
  const [responseObject, setResponseObject] = useState({});
  const [errorMessage, setErrorMessage] = useState("");



  //=====  API Call  =====//
    // useRef() used to create a ref that keep track of first render.
      // This prevents API call to go off at initial page road
      // without search param, which will cause an error.
  const didMount =useRef(false);
  useEffect( () => {
    if (didMount.current) {
      const testCallToApi = () => {
        const url = new URL(baseUrl);
        url.search = new URLSearchParams({
          key: apiKey,
          // country key value pari left in to be implemented later.
          country: userCountryChoice,
          state: searchTermArray[0],
          city: searchTermArray[1],
        });

        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((jsonResult) => {
            console.log(jsonResult);
            // if statement to handle error(user side) for 404 from
              // missspelled or missing province/city names on submit.
            if (jsonResult.status == "success"){
              setResponseObject({
                status: jsonResult.status,
                aqi: jsonResult.data.current.pollution.aqius,
                humidity: jsonResult.data.current.weather.hu,
                temperature: jsonResult.data.current.weather.tp,
                weatherIcon: jsonResult.data.current.weather.ic,
              })
            } else{
              setErrorMessage("Do dolphins ever get bored? Also, you might have a typo there")
            }
          });
      };
      testCallToApi();

    } else {
      didMount.current = true;
    }

  }, [searchTermArray]);



  //===  handleSubmit to pass to SearchForm as prop  ===//
  const handleSubmit = (event, userProvinceChoice, userCityChoice) => {
    event.preventDefault();
    // error handling for empty input box on submit
    if (userProvinceChoice == "" || userCityChoice == "") {
      setErrorMessage("Do birds ever get scared of height? Also, you might need to enter both Province and City")
    }
    else{
      setErrorMessage("");
      setSearchTermArray([userProvinceChoice, userCityChoice]);
    } 
  }
  


  // @@@  JSX  @@@ //
  return (
    <div className="App">
    <div className="wrapper">

      <header>
        <h1>Weather and Air Quality</h1>
        <p>Please enter Province and City name</p>
      </header>

      <SearchForms handleSubmit={ handleSubmit }/>
      <DisplayResults responseObject={responseObject}/>
      <p>{errorMessage}</p>

    </div>
    {/* wrapper ends */}
    </div>
  );
}

export default App;
