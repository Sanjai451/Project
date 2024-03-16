import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

const NewsContainer = ({category}) => {
    const apikey = '502b1bc57ce74627ada468276b272f37'
    const [artice,setArticle] = useState([])

    useEffect(()=>{
        const url =`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apikey}`
        fetch(url)
        .then((res)=>res.json())
        .then((res)=>setArticle(res.articles))

    },[category])

  return (
    <div className='container'>
        <h2 className='text-center m-3 '>Latest<span className='badge fs-4 bg-danger'>News</span></h2>
        {
            artice.map((news,index)=>(
                <NewsItem key={index} title={news.title} description={news.description} url={news.url} urlToImage={news.urlToImage} />
            ))
        }
    </div>
  )
}

export default NewsContainer
