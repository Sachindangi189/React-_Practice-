import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


const WeatherInfo = ({info}) => {
 
  let HOT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7LGyS8Z03yXxRg6xJOI1CSMWHnfa0eHKvQQ&s";
  let COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS93gM6jX-vZYXnIXuI-XjEMLANxxNfisFYtg&s";
  let RAIN_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvWfm2Ev80eEC7Wfv6YdSjjhnN5QpnV8bWgg&s"; 

  return (
    <div>
    <h3>  Wheather Inf0 </h3>
    <div className='card-container'>
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image = {info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature = {info.temp}&deg;c</p>
          <p>Min Temerature = {info.temp_min}&deg;c</p>
          <p>Max Temerature = {info.temp_max}&deg;c</p>
          <p>Humidity : {info.humidity}</p>
          <p>Description : {info.description}</p>
        </Typography>
      </CardContent>
    </Card>
   </div>
    </div>
  )
}

export default WeatherInfo;