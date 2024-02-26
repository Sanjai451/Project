import './App.css'
import WeatherDetails from './WeatherDetails'
// import PropTypes from 'prop-types'
 
//images import
import clearIcon from "./assets/clear.webp"
import cloudIcon from "./assets/cloud.webp"
import dizzleIcon from "./assets/dizzle.webp"
import rainyIcon from "./assets/rainy.webp"
import snowIcon from "./assets/snow.webp"
import sunnyIcon from "./assets/sunny.png"
import searchIcon from "./assets/search.png"
import { useEffect, useState } from 'react'

// api key => ae900e562aa3b5225d0b7205f1b421a2
// api call => https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// let api_key=ae900e562aa3b5225d0b7205f1b421a2
// const search =async ()=> {
//   let url=`https://api.openweathermap.org/data/2.5/weather?q=london&appid=${api_key}`

// }


// WeatherDetails.PropTypes={
//   icon: PropTypes.string.isrequired,
//   temp: PropTypes.number.isrequired,
//   city: PropTypes.string.isrequired,
//   country: PropTypes.string.isrequired,
//   humidity: PropTypes.number.isrequired,
//   wind: PropTypes.number.isrequired,
//   latitude: PropTypes.number.isrequired,
//   longitude: PropTypes.number.isrequired
// }

function App() {
  let api_key="ae900e562aa3b5225d0b7205f1b421a2"

  //useState for image 
  const [icon,setIcon]=useState(snowIcon)
  const [temp,setTemp]=useState(100)
  const [city,setCity]=useState("Chennai")
  const [country,setCountry]=useState("India")
  const [lati,setLati]=useState(100.33)
  const [longi ,setLongi]=useState(200.44)
  const [wind,setWind]=useState(100)
  const [humid,setHumid]=useState(600)
  const [text,setText]=useState("Chennai")
  const [error,setError]=useState(null)
  //state to manage loading
  const [cityNotFound,setCityNotFound]=useState(false)
  const [loading,setLoading]=useState(false)

const weatherIconMap ={
  "01d":clearIcon,
  "01n":clearIcon,
  "02n":cloudIcon,
  "02d":cloudIcon,
  "03d":dizzleIcon,
  "03n":dizzleIcon,
  "04n":dizzleIcon,
  "04d":dizzleIcon,
  "09d":rainyIcon,
  "09n":rainyIcon,
  "10n":rainyIcon,
  "10d":rainyIcon,
  "13n":snowIcon,
  "13d":snowIcon

}

  const search =async ()=> {
    setLoading(true)

    let url=`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`
    try {
      let res = await fetch(url)
      let data = await res.json()
      console.log(data)
      // console.log(data) will print the json of fetched data
      if(data.cod === "404"){
        console.error("City Not Found")
        //alert("City not found")
        setLoading(false)
        setCityNotFound(true)
        return
      }
      setTemp(Math.floor(data.main.temp))
      setCity(data.name)
      setCountry(data.sys.country)
      setLati(data.coord.lat)
      setLongi(data.coord.lon)
      setWind(data.wind.speed)
      setHumid(data.main.humidity)
      const weatherIconCode= data.weather[0].icon
      console.log(weatherIconCode)
      setIcon(weatherIconMap[weatherIconCode] || clearIcon )
      setCityNotFound(false)
      
    } catch (error) {
      console.log(error ,"An Error occured")
      setError("An occurred while fetching data")

    }finally{
      setLoading(false)
    }
  }
  

  // handle when "Enter"
  const handlekeydown =(e)=>{
    if(e.key === "Enter"){
      search(); //call search function if enter key is pressed
    }
  }
  
  const handlecity = (e) =>{
    setText(e.target.value)
    
   }

    useEffect(function () {
      search();
    },[])

  return (
    <>
    <div className="container">
      <div className="input-container">
        <input type="text" className='cityInput'
         onChange={handlecity} 
         value={text} 
         onKeyDown={handlekeydown}
         placeholder='Search City'/>
        <div className="search-icon" onClick={search}>
          <img src={searchIcon} alt="Search"  className='searchimg'/>
        </div>
      </div>
       <div className="error-loading">
        {loading && <div className='loading'>
            Loading...
        </div>}
        {error && <div className='error-msg'>{error}</div>}
        {cityNotFound && <div className="city-not-found">City not found</div>}
       </div>
      {!loading && !cityNotFound && <WeatherDetails icon={icon} temp={temp} city={city} country={country}
       latitude={lati} longitude={longi} humidity={humid} wind={wind}/>}

      <div className="copywright">
        <div><p>Designed by Sanjai Kumar</p></div>
      </div>
    </div>
    </>
  )
}

export default App

