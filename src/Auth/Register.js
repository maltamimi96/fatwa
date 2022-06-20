import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AuthContext from "../context/AuthProvider";
import { useRef, useState, useEffect, useContext } from 'react';
import API from '../api/axios';
import {Navigate,} from 'react-router-dom';

const LOGIN_URL = 'auth/sign_up';

const theme = createTheme();

const Register = ()=> {


  const {auth, setAuth } = useContext(AuthContext);

  const emailRef = useRef();
  const usernameRef = useRef();
  const errRef = useRef();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
      emailRef.current.focus();
  }, [])

  useEffect(() => {
      setErrMsg('');
  }, [email, password])



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await API.post(LOGIN_URL,
            JSON.stringify({username,email, password,password_confirmation}),
            {
                headers: { 'Content-Type': 'application/json' },
            }
        );
        const jwt = response?.data?.jwt
        const username =response?.data.username
        const user_id =response?.data.id
        console.log(response)
        setAuth({jwt,username,user_id})
        
        setSuccess(true);
    } catch (err) {
        if (!err?.response) {
            setErrMsg('No Server Response');
        } else if (err.response?.status === 400) {
            setErrMsg('Missing emailname or Password');
        } else if (err.response?.status === 401) {
            setErrMsg('Unauthorized');
        } else {
            setErrMsg('Login Failed');
        }
        errRef.current.focus();
    }
}

return (

  <>
  {success ? (

          <Navigate replace to="/" /> 
           
  ) : (
    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

        <CssBaseline />


        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoFocus
              inputRef={usernameRef}
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            
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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password_confirmation"
              label="Confirm Password"
              type="password"
              id="password_confirmation"
              value={password_confirmation}
              autoComplete="current-password"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
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
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    
    )}
            </>

  );
}

export default Register
