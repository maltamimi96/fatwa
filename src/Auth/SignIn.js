import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import AuthContext from "../context/AuthProvider"
import { useRef, useState, useReducer, useContext,useEffect } from 'react'
import {Navigate,} from 'react-router-dom'
import { login } from '../services/auth.serivce'




const theme = createTheme()
const initialState={
  email:'',
  password:''
}
function reducer(state,action){
  switch (action.type){
    case 'setEmail':
      return {...state,email:action.payload}
    case 'setPassword':
        return {...state,password:action.payload}  
    default:
      throw new Error()    
  }
}
const SignIn = ()=> {

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
    
        const response = login(state.email,state.password)
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
  {success ? (

          <Navigate replace to="/" /> 
           
  ) : (
    
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="emailname"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef={emailRef}
              onChange={(e) => dispatch({type:"setEmail",payload:e.target.value})}
              value={state.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={state.password}
              autoComplete="current-password"
              onChange={(e) => dispatch({type:"setPassword",payload:e.target.value})}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
           
          </Box>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        </Box>
      </Container>
    </ThemeProvider>
    
    )}
            </>

  )
}

export default SignIn


  {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>*/}


                        {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}