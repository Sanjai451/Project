

import './weatherdet.css'

import windIcon from "./assets/wind.webp"
import humidityIcon from "./assets/humidity.webp"

import clearIcon from "./assets/clear.webp"
import cloudIcon from "./assets/cloud.webp"
import dizzleIcon from "./assets/dizzle.webp"
import rainyIcon from "./assets/rainy.webp"
import snowIcon from "./assets/snow.webp"
import sunnyIcon from "./assets/sunny.png"
import searchIcon from "./assets/search.png"

const WeatherDetails = ({icon,temp,city,country,latitude,longitude,wind,humidity}) => {
  return (
    <div className="wdiv">
        <div className='image'>
            <img src={icon} alt="Weather" className='image-icon' />
        </div>
        <div className="temperature">
            <h3>{temp}°C</h3>
        </div>
        <div className="city">
            <h3>{city}</h3>
            <h4>{country}</h4>
        </div>
        <div className="co-ordinate">
            <p>Latitude: {latitude}</p>
            <p>Longitude: {longitude}</p>
        </div>
        <div className="hum-wind">
            <div className="humidity-details">
                <img src={humidityIcon} alt="" />
                <div>{humidity}%</div>
                <div>Humidity</div>
            </div>
            <div className="wind-details">
                <img src={windIcon} alt="" />
                <div>{wind} Km/h</div>
                <div>Wind</div>
            </div>
        </div>
    </div>
    
  )
}

export default WeatherDetails
