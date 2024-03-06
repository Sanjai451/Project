import { useState } from 'react'
import './App.css'
function App() {
  const [weight,setweight]=useState()
  const[height,setheight]=useState("")
  const[status,setstatus]=useState("")
  const [bmi,setbmi]=useState(null)
  // const[inval,setinval]=useState(false)
  const [errorvalue,seterrorval]=useState("")
  function clearval(){
    setheight("")
    setweight("")
    setbmi(null)
    setstatus("")
  }
  const calculatebmi=()=>{
    const isvalidheight=/^\d+$/.test(height)
    const isvalidweight=/^\d+$/.test(weight)
    if(isvalidheight &&isvalidweight){
      seterrorval("")
      const heightinmetre= height/100
      const bmivalue=weight / (heightinmetre *heightinmetre)
      setbmi(bmivalue.toFixed(2))
      if(bmivalue<=18){
        setstatus("Underweight")
      }
      else if(bmivalue>18 && bmivalue<=25.9){
        setstatus("Normal weight")
      }
      else if(bmivalue>25 && bmivalue<=29.9){
        setstatus("Overweight")
      }else{
        setstatus("Obese")
      }
    }else{
      setbmi(null)
      setstatus("")
      // setinval(true)
      seterrorval("Enter valid data for Height and Weight")

    }
  }

  return (
    <>
      <div className="container">
       <div className="box">
    {/* result */}
       </div>
       <div className="data">
          <h1>BMI CALCULATOR</h1>
        
          <div className="input-container">
           {/* {inval && <p className='para'>Please enter a valid data !</p>} */}
           {errorvalue && <p className='para'>{errorvalue}</p>}
            <label htmlFor="height">Height (cm):</label>
            <input type="text" id='height' value={height} onChange={(e)=>setheight(e.target.value)}/>
            <label htmlFor="weight">Weight (kg):</label>
            <input type="text" id='weight' value={weight} onChange={(e)=>setweight(e.target.value)} />
          </div>
          <div className="btn">
            <button onClick={calculatebmi}>Calculate BMI</button>
            <button onClick={clearval}>Clear all</button>
          </div>
          {bmi !==null && (<div className="result">
            <p>Your BMI is : {bmi}</p>
            <p>Status : {status}</p>
          </div>)}
       </div>
      </div>
    </>
  )
}

export default App
