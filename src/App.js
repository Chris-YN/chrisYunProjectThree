


import {useState, useEffect, useRef} from "react";
import axios from "axios" ;
import './App.css';


function App() {
  // setting up const variables for the app
  const baseUrl = "https://api.airvisual.com/v2/city";
  const apiKey = "7d2a621e-555f-4192-9072-0289c034663c";
  const [userCountryChoice, setUserCountryChoice] = useState("canada");
  const [userProvinceCoice, setUserProvinceChoice] = useState("");
  const [userCityChoice, setUserCityChoice] = useState("");
  const [searchTermArray, setSearchTermArray] = useState([]);

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
            console.log(jsonResult.data.current.pollution.aqius);
            console.log(jsonResult.data.current.weather.hu);
            console.log(jsonResult.data.current.weather.tp);
            console.log(jsonResult.data.current.weather.ic);
          });
      };
      testCallToApi();
    } else {
      didMount.current = true;
    }

    // axios({
    //   url: baseUrl,
    //   method: "GET",
    //   dataRespsonse: "json",
    //   params: {
    //     country: userCountryChoice,
    //     state: userProvinceCoice,
    //     city: userCityChoice,
    //   }
    // })
    // .then( (response) => {
    //   console.log(response);  
    // });

  }, [searchTermArray]);

  const handleProvinceInputChange = (event) => {
    setUserProvinceChoice(event.target.value);
  };

  const handleCityInputChange = (event) => {
    setUserCityChoice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSearchTermArray([userProvinceCoice, userCityChoice]);
    setUserProvinceChoice("");
    setUserCityChoice("");
  }
  
  
  return (
    <div className="App">

      <form action="sumit" onSubmit={handleSubmit}>
        <label htmlFor="province">choose province to get data for</label>
        <input type="text" id="province" onChange={handleProvinceInputChange} value={userProvinceCoice}/>
        

        <label htmlFor="city">choose city to get data for</label>
        <input type="text" id="city" onChange={handleCityInputChange} value={userCityChoice} />
        <button>submit</button>
      </form>

    </div>
  );
}

export default App;
