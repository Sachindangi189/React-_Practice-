import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


const Search = ({infoWeather}) => {

let [city,setCity] = useState("");
const API_URL = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = "61be13d7ae7e36af6ced02e8159e58bb";

const getWheatherInfo = async() =>{
  let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  let responsecode = await response.json();

  let result = {
   city : city,
   temp : responsecode.main.temp,
   temp_max : responsecode.main.temp_max,
   temp_min : responsecode.main.temp_min,
   humidity : responsecode.main.humidity,
   description : responsecode.weather[0].description,
  };
  console.log(result);
  return result;
};


 
const cityName = (event) => {
setCity(event.target.value);
}

const handleCity = async(event) => {
  event.preventDefault();
  setCity("");
  let newInfo = await getWheatherInfo();
  infoWeather(newInfo);
}

  return (
    <>
    <form action="#">
    <TextField id="outlined-basic" label="City Name" variant="outlined" value={city} onChange={cityName} required />
    <br></br>
    <br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="contained" type='submit' onClick={handleCity}>
        Search..
      </Button>
      </form>
        </>
  )
}

export default Search;