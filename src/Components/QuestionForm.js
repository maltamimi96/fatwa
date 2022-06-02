import { Box } from '@mui/system'
import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

 

function QuestionForm() {
  return (
     <Grid container> 
      <form autoComplete='off'>
          <Grid item lg={4}>
            <TextField 
                label="Title"
                variant="outlined"
                color="secondary"
                required 
                

                           
            />
          </Grid>
          <Grid item >
            <TextField
                label="Body"
                variant="outlined"
                color="secondary"
                required     
                multiline
                rows={6} 
                
                          
          
            />
        </Grid>
        <Grid item>
        <Button 
            variant="contained" 
            endIcon={<SendIcon />}
            color="secondary"
            type='submit'
        >
          Submit Question
      </Button>
      </Grid>
        </form>
      </Grid>     
  )
}

export default QuestionForm