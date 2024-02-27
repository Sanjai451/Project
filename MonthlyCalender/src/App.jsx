import { useState } from 'react'
import './App.css'
import leftarrow from './assets/arrow-left-circle.svg'
import rightarrow from './assets/arrow-right-circle.svg'

const  days= ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function App() {
  const [selecteddate,setselecteddate]=useState(new Date())

  const dayinmonth=()=>{
    const dayArray=[]
    const firstday=new Date(selecteddate.getFullYear(),selecteddate.getMonth(),1)//for day 1
    const lastday=new Date(selecteddate.getFullYear(),selecteddate.getMonth()+1,0)//last day of the month selecting from previous day of next month
    console.log(firstday)
    console.log(lastday)
    for (let i=0;i<firstday.getDay();i++){
      dayArray.push(null)
    }
    for(let i=1;i<=lastday.getDate();i++){
      dayArray.push(new Date(selecteddate.getFullYear(),selecteddate.getMonth(),i))
    }
    console.log(dayArray)
    return dayArray 
 }
  // dayinmonth()
  const handlechangemonth=(e)=>{
    const currmonth=parseInt(e.target.value,10)
    // console.log(currmonth)
    setselecteddate(new Date(selecteddate.getFullYear(),currmonth,1))
  }
  const handlechangeyear=(e)=>{
    const curryear=parseInt(e.target.value,10)
    setselecteddate(new Date(curryear,selecteddate.getMonth(),1))
  }
  //set button month
  const changebeforemonth=()=>{
    setselecteddate(new Date(selecteddate.getFullYear(),selecteddate.getMonth()-1,1))
  }
  const changenextmonth=()=>{
    setselecteddate(new Date(selecteddate.getFullYear(),selecteddate.getMonth()+1,1))
  }
  const isSame=(day1,day2)=>{
    return day1.getDate()===day2.getDate() && day1.getFullYear()===day2.getFullYear() && day1.getMonth()===day2.getMonth()
  }
  return (
    <>
     <div className="calender">
       <div className="header">
        <button onClick={changebeforemonth}>
          <img src={leftarrow}  />
        </button>
        <select value={selecteddate.getMonth()} onChange={handlechangemonth}>
          {
            months.map((m,i)=>(
              <option value={i} key={i}>{m}</option>
            ))
          }
        </select>
        <select value={selecteddate.getFullYear()} onChange={handlechangeyear}>
          {
            Array.from({length:10},(_,i)=>selecteddate.getFullYear() -5+i)
            .map((ye)=>(<option key={ye} value={ye}>{ye}</option>))
          }
        </select>
        <button>
          <img src={rightarrow} onClick={changenextmonth} />
        </button>
       </div>
       <div className="daysofweek">
        {days.map((day)=>(<div key={day}>{day}</div>))}
       </div>
       <div className="daysofmonth">
         {
          dayinmonth().map((days,index)=>(
            <div className={days?(isSame(days,new Date())?"daysbox current":"daysbox"):"empty"} key={index}>{days?days.getDate():""}</div>
          ))
         }
       </div>
      </div>
    </>
  )
}

export default App
