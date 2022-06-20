import { Box } from '@mui/system'
import React from 'react'
import QuestionForm from '../Components/QuestionForm';
import { useEffect,useState } from "react";
import { getQuestion } from "../services/question.service";


function Ask() {

  return (
<QuestionForm/>      
    )
}

export default Ask