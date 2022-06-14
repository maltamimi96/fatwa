
import AuthContext from "../context/AuthProvider";
import { useRef, useState, useEffect, useContext } from 'react';
import axios from '../api/axios';


function QuestionForm() {
const [title,setTitle]=useState("")
const {auth } = useContext(AuthContext);
const LOGIN_URL = 'questions/ask';
const errRef = useRef();
const [errMsg, setErrMsg] = useState('');
const [success, setSuccess] = useState(false);
const postObj={user_id:2,
  category_id:1,
  title:"From React",
  body:"From React Account with eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NTQ4Njk3NzMsInN1YiI6Mn0.BRVHKJnBI_Y3F_HbECZMxhrhE8_ek8nbKfiEOvjzYg8"
  }


// useEffect(()=>{
//     console.log(auth.jwt)
//     const response =axios.post(LOGIN_URL,postObj
//         ,
//         {
//             headers:{
//             'Content-Type': 'application/json' ,
//             'Authorization': "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NTQ4Njk3NzMsInN1YiI6Mn0.BRVHKJnBI_Y3F_HbECZMxhrhE8_ek8nbKfiEOvjzYg8"
            
//             }
//         }
//     )

//   },[])

// 
  return (
    <div className='form-container'>
      <form>
        <div className='form--input'>
        <label htmlFor='title'>Title</label>
        <input></input>
        </div>
        <div className='form--input'>
        <label htmlFor='title'>Body</label>
        <textarea name="" id="" cols="100" rows="10"></textarea>
        </div>
        <button>Submit Question</button>
      </form>
    </div>
  )
}

export default QuestionForm

{/* <Grid container> 
<form autoComplete='off'>
    <Grid item xs={12}>
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
</Grid>      */}