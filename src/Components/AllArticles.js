import React, { useState,useEffect } from 'react'
import ArticleResponse from './ArticleResponse';


function AllArticles() {
    const [articles, setArticles] = useState(null)

    useEffect(() => {
      fetch('http://localhost:3000/questions/all')
        .then(res => {
          return res.json();
        })
        .then(data => {
          setArticles(data);
        })
    }, [])
  return (
      
    <div>
        {articles && <ArticleResponse articles={articles} />}
    </div>
  )
}

export default AllArticles