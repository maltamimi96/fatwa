import axios from "../api/axios";

const LOGIN_URL = 'auth/sign_in';
export async function login (email,password)  {
  const response = await axios.post(LOGIN_URL,
    JSON.stringify({email,password}),
    {
        headers: { 'Content-Type': 'application/json' },
        
    }
  )
  return response
}

export async function sign_up (username,email,password,con_pass)  {
  const response = await axios.post(LOGIN_URL,
    JSON.stringify({username,email,password,con_pass}),
    {
        headers: { 'Content-Type': 'application/json' },
        
    }
  )
  return response
}

