import { Box } from '@mui/system'
import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

function HighlightedAnswers() {
  return (
    <Box>
    <Grid container>
        
        <Grid item xs={12}>
        <Paper variant="outlined" >
            <Typography>HIGHLIGHTED ANSWER</Typography>
            </Paper>
        </Grid>   
         
    </Grid>
</Box>
  )
}

export default HighlightedAnswers