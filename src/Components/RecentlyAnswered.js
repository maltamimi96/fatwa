import { Box } from '@mui/system'
import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Question from '../Components/Question';


function RecentlyAnswered() {
  return (

    <div>
      <Typography variant='h5'> Recently Asked</Typography>
    <Question title="Q1"></Question>
    </div>
  )
}

export default RecentlyAnswered