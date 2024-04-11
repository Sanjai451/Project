import { useEffect, useState } from 'react'


function App() {
  const [name,setName] = useState('')
  const [datetime,setDatetime] = useState("")
  const [description,setDescription] = useState(0)

  const [transHist, setTransHist] = useState([])

  const[total,setTotal] = useState(0)

  function addNewTransaction(e){
    e.preventDefault()
    const url = 'http://localhost:8500/transaction';
    console.log("nomal==.>",name,description,datetime)
    console.log("stingify==>",JSON.stringify({name,description,datetime}))
    
    fetch(url, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body:JSON.stringify({name,description,datetime})
    })
    .then(res => res.json())
    .then((data) => console.log('result', data)) // Fixed concatenation syntax
    .catch((err) => console.log(err));
  }

  useEffect(()=>{
    const arr = getTransaction().then(res => setTransHist(res))
    console.log("res arr",arr)
    // let balance=0
    // for(const e of arr){
    //   console.log("desc")
    //   balance+=e.description
    // }
    // console.log("bal==>",balance)
  },[])

  const getTransaction = async () =>{
    const respose = await fetch('http://localhost:8500/transactions')
    const jsonData = await respose.json()
    console.log(jsonData)

    let balance=5000
    for(const e of jsonData){
   
      balance+=e.description
    }
    console.log("bal==>",balance)
    setTotal(balance)

    return jsonData;
  }
  return (
    < >
    <div className="container mt-5">
      <h1 className="text-center mb-4">₹{total}</h1>

      <form className="row mb-4 text-center" onSubmit={addNewTransaction}>
        <div className="input-group mb-3">
          <span className="input-group-text">Expense Description</span>
          <input type="text" 
            className="form-control"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="e.g., Mobile Phone"  />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Amount</span>
          <input type="number" 
                  className="form-control" 
                  placeholder="$Amount" 
                  value={description}
                  onChange={(e)=>setDescription(e.target.value)}
            />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Date & Time</span>
          <input type="datetime-local" 
                  className="form-control" 
                  placeholder="2000-12-21 02:30" 
                  value={datetime}
                  onChange={(e)=>setDatetime(e.target.value)}
                  />
        </div>
        <button type="submit"  className="btn btn-primary ">Add Expense</button>
      </form>

      <h4 className="mb-3">Expenses</h4>
      <ul className="list-group ">
        {
          transHist.map((item)=>{
            return(
              <li key={item.datetime} className="list-group-item d-flex justify-content-between align-items-center ">
              {item.name}  <span>{item.datetime.slice(0,10)}</span>
              <span className={(item.description) < 0?'bg-danger  rounded-pill badge':'bg-primary rounded-pill badge'}>{item.description}</span>
            </li>
            )
          })
        }
        {/* <li className="list-group-item d-flex justify-content-between align-items-center ">
          New Mobile Phone
          <span className="badge bg-primary rounded-pill">$200</span>
        </li> */}
      </ul>
    </div>
    </>
  )
}

export default App
