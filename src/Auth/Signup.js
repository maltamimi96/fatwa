
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useRef, useState, useEffect, useContext ,useReducer} from 'react'
import AuthContext from "../context/AuthProvider"
import {Navigate,} from 'react-router-dom'
import { sign_up } from '../services/auth.serivce'


const theme = createTheme()
const initialState={
  username:'',
  email:'',
  password:'',
  confirm_password:''

}
function reducer(state,action){
  switch (action.type){
    case 'setUsername':
      return {...state,username:action.payload}  
    case 'setEmail':
      return {...state,email:action.payload}
    case 'setPassword':
        return {...state,password:action.payload}  
    case 'setPasswordConfirmation':
        return {...state,confirm_password:action.payload}   
    default:
      throw new Error()    
  }
}
export default function SignUp() {
  const [state,dispatch]= useReducer(reducer,initialState)
  const {setAuth } = useContext(AuthContext)
  const emailRef = useRef()
  const errRef = useRef()
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)
  useEffect(() => {
    emailRef.current.focus()
}, [])

useEffect(() => {
    setErrMsg('')
}, [state.email, state.password])

  const handleSubmit = async (e) => {
    e.preventDefault()

  
        const response = sign_up(state.username,state.email,state.password,state.confirm_password)
        response.then((response)=>{
          const jwt = response?.data?.jwt
          const username =response?.data.username
          const user_id =response?.data.user_id
          setAuth({jwt,username,user_id})
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
          errRef.current.focus()}) 
         
}

  return (


    <>

    {success?( <Navigate replace to="/" /> ):(


    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="user-name"
                  onChange={(e) => dispatch({type:"setUsername",payload:e.target.value})}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => dispatch({type:"setEmail",payload:e.target.value})}
                  inputRef={emailRef}


                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => dispatch({type:"setPassword",payload:e.target.value})}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirm-password"
                  label="Confirm-Password"
                  type="password"
                  id="password"
                  autoComplete="confirm-password"
                  onChange={(e) => dispatch({type:"setPasswordConfirmation",payload:e.target.value})}

                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/sign-in" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

        </Box>
      </Container>
    </ThemeProvider>
    )}
    </>
  )
}