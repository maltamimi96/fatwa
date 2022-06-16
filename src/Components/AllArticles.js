import React, { useState,useEffect } from 'react'
import { getAll } from '../services/question.service';
import ArticleResponse from './ArticleResponse';


function AllArticles() {
    const [articles, setArticles] = useState(null)

    useEffect(() => {

        const data = getAll()
        data.then((data)=>setArticles(data))

    }, [])
  return (
      
    <div>
         
        {articles && <ArticleResponse articles={articles} />}
    </div>
  )
}

export default AllArticles