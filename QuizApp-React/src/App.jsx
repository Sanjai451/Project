import { useState,useEffect } from 'react'
import './App.css'
import quesdata from "./ques.json"

function App() {
   const url="https://the-trivia-api.com/v2/questions"
  //  const call=()=>{
  //     const res=fetch(url).then((res) => res.json())
  //     console.log(res)
      
  //  }
  // call()
  const [currentques,setcurrentques]=useState(0)
  const [score,setscore]=useState(0)
  const [showscore,setshowscore]=useState(false)
  const [timer,setTimer]=useState(10)

  const handleclick =(e) =>{
    console.log(e)
    console.log(quesdata[currentques].correctAnswer)
    console.log(e==quesdata[currentques].correctAnswer?"correct":"wrong")
    
    //if ans match with the corr ans
    if ( quesdata.length-1>currentques){
      
      setTimer(10)
      if(e===quesdata[currentques].correctAnswer){
        setscore((score)=>score+1)
        setcurrentques((currentques)=>currentques+1)
      }else{
        setcurrentques((currentques)=>currentques+1)
      }
    }
    else{
      setshowscore(true)
    }

  }
  const handlerestartquiz=()=>{
    setcurrentques(0)
    setTimer(10)
    setshowscore(false)
    setscore(0)
  }
  useEffect(()=>{
    // setInterval((
    //   setcurrentques((currentques)=>currentques+1)
    //   setTimer((time)=>time-1)
    // ),10000)
    let interval;
    if (timer > 0 && !showscore){
      interval=setInterval(()=>{
        setTimer((ptime)=>ptime-1)
      },1000)
    }else{
      clearInterval(interval)
      setshowscore(true)
    }
    return ()=>clearInterval(interval)
  },[timer,showscore])
  
return (
    <>
    <div className="quiz-app">
      {
        showscore?(
          <div className="score-section" >
        <h2>You scored : {score}/{quesdata.length}</h2>
        <button onClick={handlerestartquiz}>Restart</button>
      </div>
        ):
        <div className="question-section">
        <h2>Question {currentques+1}</h2>
        <p>{quesdata[currentques]["question"]}</p>
        <div className="option">
        {
          quesdata[currentques].options.map((data,index)=>(
            <button key={index} onClick={()=>handleclick(data)}>{data}</button>
          ))
        }
        </div>
        <div className="timer">
        Time left : <span>{timer}s</span>
      </div>
      </div>
      }

      
      
    </div>
    </>
  )
}

export default App
