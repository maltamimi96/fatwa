import { Box ,Grid,Paper, Typography} from '@mui/material'
import React from 'react'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { margin, padding, width } from '@mui/system';

function Question(props) {
  return (
      <Paper sx={{
          backgroundColor:"gray",
          display:"flex",
          alignItems:"Space-around",
          margin:"5px"
          }}
          elevation={8}
          >
          
          

          <QuestionAnswerIcon htmlColor='green' fontSize='large'></QuestionAnswerIcon> <Typography variant='h6'>{props.title}</Typography>
      </Paper>
  )
}

export default Question