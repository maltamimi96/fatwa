import React from 'react'
import { getQuestion,deleteQuestion } from '../services/question.service'
import {useEffect,useState}from 'react'
import {Link,useParams } from  'react-router-dom'
import AuthContext from '../context/AuthProvider'
import { useContext } from 'react';

    


function Question() {
        const [question,setQuestion]= useState({})
        const URL_PARAM=useParams()
        const { auth } = useContext(AuthContext);


    useEffect(()=>{
        const response =getQuestion(URL_PARAM.id)
        response.then((response)=>
        {        
            setQuestion(response)            
        }).catch((error)=>{console.log("Question Not Found")})
        console.log(URL_PARAM)
        },[])

    function deleteQ(){
        const response = deleteQuestion(URL_PARAM.id)
        response.then((response)=>{  setQuestion({})})
        .catch((err)=>{console.log(err)})
    }     
  return (
    <div>
        <div className='Question-Title'>
            <h2>{question.title}</h2>
            <p>{question.body}</p>
            <h6>{question.author}</h6>

        </div>
        <div className='edit-data'>
            <button onClick={deleteQ}>
                DELETE
            </button>

        </div>
    </div>
    )
}

export default Question