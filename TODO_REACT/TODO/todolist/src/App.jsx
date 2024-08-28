import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const[addNew,setAddNew] = useState(false)
  const[data,setData] = useState(null)
  const [newTask,setNewTask] = useState('')
  const [edit,setEdit] = useState(null)
  const[editId,setEditID] = useState(0)

  useEffect(()=>{
    // fetch('http://localhost:5000/alldata').then(res=>res.json()).then(res=>{setData(res)
    //   console.log(data)
    // })
    fetchData();
  },[])

  const fetchData = ()=>{

      axios.get('http://localhost:5000/alldata')
      .then(function (response) {
        // handle success
        console.log("Response",response);
        setData(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      })

    }
    const addNewData = async()=>{
          console.log("send")
          // axios.post("http://localhost:5000/addData",{
          //     task:newTask,
          //     id:123
          //   }).then(res=>{console.log(res.data)})
          axios({
            method: 'post',
            url: 'http://localhost:5000/addData',
            data: {
              task:newTask,
              id:21212
            }
          }).then((res)=>{
            console.log(res.data)
            fetchData();
            // setNewTask(" ")
          })
          .catch((res)=>{console.log("failed to insert",res)})
          console.log("sent")
    }

    const deleteData= async(id)=>{
      console.log("delete button clicked")
      await axios.delete(`http://localhost:5000/deleteData/${id}`)
      .then((res)=>{
        console.log(res.data)
        fetchData();
      })
      .catch((res)=>{
        console.log("failed to delete data")})

    }

    const updateData = async()=>{
      console.log("update btn clicked")
      // await axios.patch(`http://localhost:5000/updateData/`)
      await axios({method:"patch",
                  url: 'http://localhost:5000/updateData',
                  data: {
                    id:editId,
                    task:newTask
                  }
                })
      .then((res)=>{
        console.log(res)
        fetchData();
      })
      .catch((res)=>{
        console.log("failed to update")
      })
    }

    // const editNewData = async()=>{

    // }

  return (
    <>
      <div className="main content" id='content'>
          <h1>Todo-list</h1>
          <h4>Plan your task now</h4>

          <div className="tasks">

              { data && 
                data.map((item,index)=>(
                  <div className="task" key={index}>
                    <p>{item.task}</p>
                   { console.log("item",item)}
                    <button className='deleteBtn' onClick={()=>{deleteData(item._id)}}>Delete</button>
                    <button className='editBtn' onClick={()=>{
                      setEdit(true)
                      setEditID(item._id)
                      }}>Edit</button>
                  </div>
                ))
                }
          </div>
          {
          edit &&
          <div className="popup">
              <h2>Update your task</h2>
              <textarea name="input" id="input" placeholder='Update Your Tasks' value={newTask}
                onChange={(e)=>{
                setNewTask(e.target.value)
                // console.log(newTask) 
                }} ></textarea>
              <br />

              <button className='addBtn' onClick={()=>updateData()}>Edit</button>
              <button className='cancelBtn' onClick={()=>{setEdit(false)}}>cancel</button>
          </div>}


         {
          addNew &&
          <div className="popup">
              <h2>Enter your task</h2>
              <textarea name="input" id="input" placeholder='Enter Your Tasks'
                onChange={(e)=>{
                setNewTask(e.target.value)
                // console.log(newTask) 
                }} ></textarea>
              <br />

              <button className='addBtn' onClick={()=>{
                addNewData()
                }}>Add</button>
              <button className='cancelBtn' onClick={()=>{setAddNew(false)}}>cancel</button>
          </div>}

          <div className="addnew" onClick={()=>{setAddNew(true)}}>
              <button className='add'>+</button>
          </div>

      </div>
    </>
  )
}

export default App
