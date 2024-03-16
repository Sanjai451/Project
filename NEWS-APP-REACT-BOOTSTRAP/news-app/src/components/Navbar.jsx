import React from 'react'

const Navbar = ({setCategory}) => {
  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light dark navbar navbar-dark bg-dark">
             <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-3.4'>News App</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-link active" onClick={()=>setCategory('sports')} aria-current="page" href="#">Sports</div>
            </li>
            <li className="nav-item">
              <div className="nav-link active" onClick={()=>setCategory('technology')} aria-current="page" href="#">Technology</div>
            </li>
            <li className="nav-item">
              <div className="nav-link active" onClick={()=>setCategory('business')} aria-current="page" href="#">Business</div>
            </li>
            <li className="nav-item">
              <div className="nav-link active" onClick={()=>setCategory('science')} aria-current="page" href="#">Science</div>
            </li>
            <li className="nav-item">
              <div className="nav-link active" onClick={()=>setCategory('entertainment')} aria-current="page" href="#">Entertainment</div>
            </li>
           
           
        </ul>
        </div>
    </div>
    </nav>
  )
}

export default Navbar
