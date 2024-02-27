import './Css/advicecss.css'
import { useState } from 'react'
const Advice = () => {
    const [advices,setadvices]=useState('Please click the button to get advices')
    const [count,changecount] = useState(0)
    async function changeadvices(){
        const res = await fetch("https://api.adviceslip.com/advice")
        const data= await res.json()
        //console.table(data)
        setadvices(data.slip.advice) 
        changecount((c)=>c+1)
    }
    // function incrcount(){
    //     changecount(count+1)
    // }
  return <>
  <div className='top'>
    <h2>The Advice App</h2>
  </div>
  <div className="parent">
    <h3 className='txt'>{advices}</h3>
    <button className='btn' onClick={changeadvices} >Get New</button>
    <Counter count={count}/>
  </div>
  </>
  
}
//just adding one more count for the paragraph to learn more about components in react
function Counter(props){
    return(
        <p className='para' >You have read <b>{props.count}</b> advices</p>
    );
}
export default Advice
