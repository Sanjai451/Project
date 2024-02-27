import React, { useState } from 'react'

const FAQItem = ({question,answer}) => {
    const [show,setshow]=useState(false)
    const [que,setque]=useState()
    const togglebtn=()=>{
        setshow(!show)
    }
    
  return (
    <div className={`faq-item ${show ? "active" : ""}`}>
      <div className="faq-item-header" onClick={togglebtn}>{question}</div>
      <div className="faq-item-body">
        <div className="faq-item-body-content">{answer}</div>
      </div>
    </div>
  )
}

export default FAQItem
