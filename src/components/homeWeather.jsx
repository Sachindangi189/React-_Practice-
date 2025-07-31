import { useState } from "react";
import Search from "./seachBox";
import WeatherInfo from "./weatherInfo";

const Home = () =>{
  const [weatherInfo,setWeatherInfo] = useState({
    city : "Jind",
    temp : 25.5,
    temp_min : 25.5,
    temp_max : 25.5,
    humidity : 47,
    description : "Haze"
  })

  let infoWeather = (newInfo) => {
    setWeatherInfo(newInfo);
  }

  return(
    <div>
      <h2>Weather App by Dangi</h2>
      <Search infoWeather = {infoWeather}/>
      <WeatherInfo info = {weatherInfo}/>
    </div>
  )
}

export default Home;