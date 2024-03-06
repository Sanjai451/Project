import { useState } from 'react'
import './currency.css'
import { useEffect } from 'react'
import axios from 'axios' //for api
const Currency = () => {
    const [amount,setamount]=useState(1)
    const [fromcurr,setfromcurr]=useState("USD")
    const [tocurr,settocurr]=useState("INR")
    const [converted,setconverted]=useState(null)
    const [exchangerates,setexchangerate]=useState(null)
    
    useEffect(()=>{
        const getexchangerate = async () =>{
          try {
            let url=`https://api.exchangerate-api.com/v4/latest/${fromcurr}`

            const respose= await axios.get(url)
            console.log(respose)
            setexchangerate(respose.data.rates[tocurr])
           // setconverted(respose.data.rates[tocurr])
          } catch (error) {
                console.log("Error while fetching",error)
          }  
        }
        getexchangerate();
    },[fromcurr,tocurr])
    
    useEffect(()=>{
        if(exchangerates !==null){
            setconverted((amount*exchangerates).toFixed(2))
        }
    },[amount,exchangerates])

    const handleAmountChange = (e) =>{
        const value=parseFloat(e.target.value)

        
        setamount(isNaN(value)?0:value)
    }
    const handleFromcurr=(e)=>{
        setfromcurr(e.target.value)
    }
    const handletocurr =(e)=>{
        settocurr(e.target.value)
    }
  return (
   <>
   <div className="currency-converter">
    <div className="box"></div>
    <div className="data">
        <h1>Currency converter</h1>
        <div className="input-container">
            <label htmlFor="amt">Amount :</label>
            <input type="number"  id="amt" onChange={handleAmountChange} />
        </div>
   
        <div className="input-container">
            <label htmlFor="fromcurr">From Currency</label>
            <select  id="fromcurr" value={fromcurr} onChange={handleFromcurr}>
                <option value="USD" >USD - United States Dollar</option>
                <option value="EUR" >EUR - Euro</option>
                <option value="GBP" >GBP - British Pound Sterling</option>
                <option value="JYP" >JYP - Japanese Yen</option>
                <option value="AUD" >AUD - Australian Dollar</option>
                <option value="CAD" >CAD - Canadian Dollar</option>
                <option value="CNY" >CNY - Chinese Yuan</option>
                <option value="INR" >INR - Indian Rupee</option>
                <option value="BRL" >BRL - Brazillian Real</option>
                <option value="ZAR" >ZAR - South African Rand</option>
            </select>
        </div>
        <div className="input-container">
            <label htmlFor="tocurr" >To Currency</label>
            <select  id="tocurrv" value={tocurr} onChange={handletocurr}>
                <option value="USD" >USD - United States Dollar</option>
                <option value="EUR" >EUR - Euro</option>
                <option value="GBP" >GBP - British Pound Sterling</option>
                <option value="JYP" >JYP - Japanese Yen</option>
                <option value="AUD" >AUD - Australian Dollar</option>
                <option value="CAD" >CAD - Canadian Dollar</option>
                <option value="CNY" >CNY - Chinese Yuan</option>
                <option value="INR" >INR - Indian Rupee</option>
                <option value="BRL" >BRL - Brazillian Real</option>
                <option value="ZAR" >ZAR - South African Rand</option>
            </select>
        </div>
        <div className="result">
            <p> {amount} {fromcurr} is equals to {converted} {tocurr}</p>
        </div>
    </div>
    </div>
   </>
  )
}

export default Currency
