
import AuthContext from "../context/AuthProvider";
import { useRef, useState,useContext,useReducer } from 'react';
import { createQuestion } from "../services/question.service";


const initialState={
  title:'',
  body:'',
  category:'',
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
  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
          <div className='form--input'>
            <label htmlFor='title'>Title</label>
            <input 
            onChange={(e) => dispatch({type:"setTitle",payload:e.target.value})}
            name="title"
            type="text" 
            required
            >
            </input>
          
          </div>
        <div className='form--input'>
          <label htmlFor='title'>Body</label>
          <textarea 
          name="body"
          cols="100" 
          rows="10"
          onChange={(e) => dispatch({type:"setBody",payload:e.target.value})}
          >
          </textarea>
        <div className='form--input'>
        <label htmlFor='title'>Category</label>
        <input 
        name="category"
        onChange={(e) => dispatch({type:"setCategory",payload:e.target.value})}

        type="number" 
        required
        >
        </input>
        
        </div>
        </div>
        <button>Submit Question</button>
      </form>
    </div>
  )
}

export default QuestionForm
