import { useState,useEffect } from 'react'
import './App.css'
import axios from "axios"
function App() {
  const [users,setUsers]=useState([])
  const [filterUsers,setFilterUsers]=useState([])
  const [isModelOpen,setIsModelOpen]=useState(false)
  const [adduserdata,setadduserdata]=useState({name:"",age:"",city:""})
  const getAllUsers= async()=>{
    await axios.get("http://localhost:8000/users").then((res)=>{
      console.log(res.data)
      setUsers(res.data)
      setFilterUsers(res.data)
    })
    
  }
  useEffect(()=>{
    getAllUsers()
  },[])

  //search handlers
  const handleSearch=(e)=>{
    const searchText=e.target.value.toLowerCase()
    const searchData =users.filter((data)=>
      data.name.toLowerCase().includes(searchText) || 
      data.city.toLowerCase().includes(searchText)
    )
    setFilterUsers(searchData)
  }
  const deleteRecord = async(todelid) =>{
    const isConfirmed=window.confirm("Are you sure want to delete this record")
      if (isConfirmed){
        await axios.delete(`http://localhost:8000/users/${todelid}`).then((res)=>{
        setUsers(res.data)
        setFilterUsers(res.data)
      })
      }
  }
  const handleAddUser =()=>{
    setIsModelOpen(true)
    setadduserdata({name:"",age:"",city:""})
  }
  const closeModel=()=>{
    setIsModelOpen(false)
    getAllUsers()

  }
  const popModelChanges =(e)=>{
    setadduserdata({...adduserdata,[e.target.name]:e.target.value})
  }
  const  handleClicksubmitPopupMenu= async(e)=>{
      e.preventDefault()
      if(adduserdata.id){
        //for update if id is present
        await axios.patch(`http://localhost:8000/users/${adduserdata.id}`,adduserdata).then((res)=>{
        console.log(res)
      })
      }else{
        //too add new data
        await axios.post("http://localhost:8000/users",adduserdata).then((res)=>{
        console.log(res)
      })
      }
      closeModel()
      setadduserdata({name:"",age:"",city:""})
      
  }
  const handleUpdateRecord = (e) =>{
    setadduserdata(e)
    setIsModelOpen(true)
  }
  return (
    <>
      <div className="container">
        <h1>CRUD Application with React Frontend and Node.js Backend</h1>
        <div className="input-search">
          <input type="search" placeholder="Search " onChange={handleSearch} />
          <button className='btn green' onClick={handleAddUser}>Add Record</button>
        </div>
        <table className='table'>
          <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
            { filterUsers && //check for absence of data
              filterUsers.map((data,index)=>(
                <tr key={data.id}>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.city}</td>
                  <td><button className='btn green' onClick={()=>handleUpdateRecord(data)}>Edit</button></td>
                  <td><button className='btn tomato'  onClick={()=>deleteRecord(data.id)}>Delete</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
        {
          isModelOpen &&
          <div className="model">
          <div className="model-content">
            <span className='close' onClick={closeModel}>&times;</span>
            <h1>{adduserdata.id?"Update Records":"User Records"}</h1>
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" value={adduserdata.name} onChange={popModelChanges} name='name' id='name' />
            </div>
            <div className="input-group">
              <label htmlFor="age">Age</label>
              <input type="number" value={adduserdata.age} onChange={popModelChanges} name='age' id='age' />
            </div>
            <div className="input-group">
              <label htmlFor="city">City</label>
              <input type="text" value={adduserdata.city} onChange={popModelChanges} name='city' id='city' />
            </div>
           <button className='btn green' onClick={handleClicksubmitPopupMenu}>{adduserdata.id?"Update":"Add Data"}</button>
          </div>
        </div>
        }
      </div>
    </>
  )
}

export default App
