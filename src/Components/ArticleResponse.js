import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import questions from "../data.json"
function ArticleResponse({articles}) {
  return (
   
    <Container>
     <Box>
          {articles.map((question)=>
          <>
          <Typography variant='h3'>{question.title}</Typography>
          <Typography variant='h5'>{question.category}</Typography>
          <Typography variant='h6'>{question.body}</Typography>
            </>
          )}
        </Box>
 </Container>
  )
}

export default ArticleResponse

        