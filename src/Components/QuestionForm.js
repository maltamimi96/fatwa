
import AuthContext from "../context/AuthProvider";
import { useRef, useState,useContext,useReducer } from 'react';
import { createQuestion } from "../services/question.service";
import { Box, Container } from "@mui/system";
import { Button, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";


const initialState={
  title:'',
  body:'',
}

function reducer(state,action){
  switch (action.type){
    case 'setTitle':
      return {...state,title:action.payload}  
    case 'setBody':
      return {...state,body:action.payload}
    case 'setCategory':
        return {...state,category:action.payload}  
    default:
      throw new Error()    
  }
}


function QuestionForm() {

const [state,dispatch]= useReducer(reducer,initialState)

const {auth } = useContext(AuthContext);
const errRef = useRef();
const [errMsg, setErrMsg] = useState('');
const [success, setSuccess] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault()
      const response = createQuestion(auth.user_id,state.category,state.title,state.body)
      response.then((response)=>{
        setSuccess(true)
        }).catch ((err)=>{ if (!err?.response) {
            setErrMsg('No Server Response')
        } else if (err.response?.status === 400) {
            setErrMsg('Wrong  emailname or Password')
        } else if (err.response?.status === 401) {
            setErrMsg('Unauthorized')
        } else {
            setErrMsg('Login Failed')
        }
        }) 
       
}
const handleChange = (event) => {
  dispatch({type:'setCategory',payload:event.target.value})  
};


  return (
    <Container>
      <Box sx={{
        marginTop:4,
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
      }}component="form" noValidate onSubmit={handleSubmit}>

        <Grid container>
          <Grid item xs={12} sx={{marginBottom:1}}>
            <TextField 
            label="Title"
            name="title"
            onChange={(e) => dispatch({type:"setTitle",payload:e.target.value})}
            fullWidth
            required
            variant="filled"
            >
             
            </TextField>
            
          </Grid>
          <Grid item xs={12} sx={{marginBottom:1}}>
            <TextField 
              label="Body"
              name="title"
              onChange={(e) => dispatch({type:"setBody",payload:e.target.value})}
              fullWidth
              multiline  
              minRows={20} 
              required  
              variant="filled"       
            >
             
            </TextField>

            
          </Grid>
          <Grid item xs={12} sx={{marginBottom:1}}>

          <InputLabel>Category</InputLabel>
        <Select
          onChange={handleChange}
          value={1}
          label="fiqh"
        >
          <MenuItem value={1}>Fiqh</MenuItem>
          <MenuItem value={2}>Tafseer</MenuItem>
        </Select>
          </Grid>
          <Grid item xs={12}>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit Question
            </Button>
            
          </Grid>
        </Grid>

      </Box>
    </Container>
  )
}

export default QuestionForm


