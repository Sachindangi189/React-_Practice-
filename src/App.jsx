import CityName from "./components/City";
import Data from "./components/data";


function App() {
  const weatherData = [
  { city: "Delhi", temperature: "34°C", condition: "Sunny" },
  { city: "Mumbai", temperature: "29°C", condition: "Rainy" },
  { city: "Chennai", temperature: "36°C", condition: "Cloudy" }
];

return (
  <>
   <div class="container text-center">
   <CityName/>
   <Data weatherData = {weatherData}/>
</div>
  </>
  
  )
}

export default App
