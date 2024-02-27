import React from 'react'
import FAQItem from './FAQItem'

const FAQAccordian = ({data}) => {
  return (
    <div className='faq-accordian'>
      <h2>FAQs</h2>
      {data.map((item)=>(<FAQItem key={item.id} question={item.question} answer={item.answer}/>))}

    </div>
  )
}


export default FAQAccordian
