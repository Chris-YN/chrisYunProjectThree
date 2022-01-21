


// SearchForms.js
import { useState } from "react";



const SearchForms = (props) => {
  const [userProvinceChoice, setUserProvinceChoice] = useState([]);
  const [userCityChoice, setUserCityChoice] = useState([]);



  const handleProvinceChange = (event) => {
    setUserProvinceChoice(event.target.value);

  };
  const handleCityChange = (event) => {
    setUserCityChoice(event.target.value);
  };



  return (

    <form 
      action="submit" 
      onSubmit={(event) => { props.handleSubmit(event, userProvinceChoice, userCityChoice)}}
    >
      <label htmlFor="provinceSearch"
        className="visuallyHidden"
      >
      </label>
      <input type="text" id="provinceSearch" 
        onChange={handleProvinceChange} 
        value={userProvinceChoice} 
        placeholder="Province"
      />

      <label htmlFor="citySearch" 
        className="visuallyHidden"
      >
      </label>
      <input type="text" id="citySearch"
        onChange={handleCityChange}
        value={userCityChoice}
        placeholder="City"
      />

      <button>Search</button>
    </form>
  )
};

export default SearchForms;