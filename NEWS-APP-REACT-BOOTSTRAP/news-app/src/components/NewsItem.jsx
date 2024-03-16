import React from 'react'
const NewsItem = ({title, description, url,urlToImage}) => {
  return (
 <div className="card bg-dark text-light d-inline-block my-2 mx-2 px-2 py-2" style={{maxWidth:'340px'}}>
  <img src={urlToImage?urlToImage:"https://via.placeholder.com/300x200"} style={{width:'99%',height:'200px'}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50) + "..."}</h5>
    <p className="card-text">{description?description.slice(0,50):"description of news" }</p>
  </div>
  
  <div className="card-body">
    <a href={url} className="card-link">link</a>
  </div>
</div>

  )
}

export default NewsItem
