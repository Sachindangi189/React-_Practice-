import './data.css'
const Data = ({ weatherData }) => {
  return (
    <>
      <div className="weather-grid">
        {weatherData.map((data, index) => (
          <div className="weather-card" key={index}>
            <h3>{data.city}</h3>
            <p>{data.temperature}</p>
            <p>{data.condition}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Data;



