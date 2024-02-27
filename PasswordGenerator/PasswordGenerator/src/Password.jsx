import React, { useState } from 'react'

const Password = () => {
     const [length,setLen] = useState(8)
     const [includeupper,setupper]=useState(true)
     const [includelower,setlower]=useState(true)
     const [includenumber,setnumber]=useState(true)
     const [includesymbol,setsymbol]=useState(true)
     const [password,setpassword]=useState()

     const generatepass=()=>{
          let charset="";
          if (includeupper) charset +="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          if (includelower) charset+="abcdefghijklmnopqrstuvwxyz"
          if (includenumber) charset+="0123456789"
          if (includesymbol) charset+="!@#$%&*()-_=+"
          let generatedpass=""
          for(let i=0;i<length;i++){
               const randomindex= Math.floor(Math.random()*charset.length)
               console.log(randomindex)
               generatedpass+=charset[randomindex]
               console.log(generatedpass)
          }
          setpassword(generatedpass)

     }
     const copytoclip=() =>{
          navigator.clipboard.writeText(password)
          alert(`Password copied ${password}`)
     }


  return (
    <div>
      <div className="container">
        <h2>STRONG PASSWORD GENERATOR</h2>
       <div className="input-group">
             <label htmlFor="num">Password Length:</label>
            <input type="number" id="num" value={length} onChange={(e)=>{setLen(parseInt(e.target.value))}} />
       

       </div>
       <div>
       <div className="checkbox-grp">
            <input type="checkbox" id="upper" checked={includeupper} onChange={(e)=>{setupper(!includeupper)}}/>
            <label htmlFor="upper">Inclue Uppercase</label>
       </div>
       <div className="checkbox-grp">
            <input type="checkbox" id="lower" checked={includelower} onChange={(e)=>{setlower(e.target.checked)}} />
            <label htmlFor="lower">Inclue Lowercase</label>
       </div>
       <div className="checkbox-grp">
            <input type="checkbox" id="symbols" checked={includesymbol} onChange={(e)=>{setsymbol(e.target.checked)}}/>
            <label htmlFor="symbols">Inclue Symbols</label>
       </div>
       <div className="checkbox-grp">
            <input type="checkbox" id="numbers" checked={includenumber} onChange={(e)=>{setnumber(e.target.checked)}} />
            <label htmlFor="numbers">Inclue Numbers</label>
       </div>
       </div>
        <button className='generatepassword'  onClick={generatepass}>Generate Password</button>
        <div className="generated-password">
            <input type="text" readOnly value={password}/>
            <button className='copy-btn' onClick={copytoclip}  >Copy</button>
        </div>
      </div>
    </div>
  )
  
  }

export default Password  
