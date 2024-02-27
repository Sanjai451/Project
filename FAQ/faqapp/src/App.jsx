import { useState } from 'react'
import './App.css'
import FAQAccordian from './FAQAccordian'

function App() {
  const data = [

    { id: 1, question: "What is React?", answer: "React is a front-end JavaScript library for building user interface or UI components." },
    
    { id: 2, question: "What are the benefits of React?", answer: "Some of the benefits of React are: it is fast,scalable, modular, easy to debug, and supports server-side rendering." },
    
    { id: 3, question: "What are the main concepts of React?", answer: "Some of the main concepts of React are: components, props, state, hooks, lifecycle methods, and JSX." },
    
    ];
    
  return (
    <>
      <FAQAccordian data={data}/>
    </>
  )
}

export default App
