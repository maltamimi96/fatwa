import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import {Link} from  'react-router-dom'




function ArticleResponse({articles}) {
  return (
   
<div className='container'>
<div className='question--header'><h2>All Questions</h2></div>
          {articles.map((question)=>
          <>
          <div className='question--container'>
              <div className='question--title-div'>
                <div className='question--icon'>
                  <BookmarksIcon sx={{color:"rgb(8, 170, 245);"}}></BookmarksIcon>
                  <Link to={`/question/${question.id}`}><h4 className='question--title'>{question.title}</h4></Link>
                </div>
                <div className='question--date'>
                  <h6>Posted on : {question.created_at.slice(0,10)}</h6>
                </div>
              </div>
            </div>
            </>
          )}
</div>
  )
}

export default ArticleResponse

        