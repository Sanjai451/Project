import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [currenttime,setCurrenttime]=useState(new Date())

  useEffect(()=>{
    const timer=setInterval(()=>{
      setCurrenttime(new Date())
    },1000)

    return () =>{
      clearInterval(timer)
    }
  },[])
 
    const formathour=(hour)=>{
      return  hour === 0 ? 12:hour > 12 ? hour-12 : hour 
    }
    const formattimewithleadingzero=(num)=>{
      return num >= 10?num:`0${num}`
    }
    const ampm =(hours)=>{
      return hours<=12?'AM':'PM'
    }
    const formatdate =(date)=>{
      let option = {weekday: "long", year:"numeric",month:"long" ,day:"numeric" }
       return date.toLocaleDateString(undefined,option);}
  return (
    <>
    <div className="digital-clock">
      <h1>Digital Clock</h1>
      <div className="time">{formattimewithleadingzero(formathour(currenttime.getHours()))}
          :{formattimewithleadingzero(currenttime.getMinutes())}
          :{formattimewithleadingzero(currenttime.getSeconds())}
          :{ampm(currenttime.getHours())}
      </div>
      <div className="date">{formatdate(currenttime)}</div>
    </div>
     
    </>
  )
}

export default App
