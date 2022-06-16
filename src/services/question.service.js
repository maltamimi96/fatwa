//crud
import axios from "../api/axios";





export async function getAll(){
    const ALL_QUESTIONS_URL = 'questions/all'

    const response = await axios.get(ALL_QUESTIONS_URL, 
    {
        headers: { 'Content-Type': 'application/json' },
    }
    )
    return response.data
}

export async function getQuestion(id){
const QUESTION_URL = `/question/${id}`
const response = await axios.get(QUESTION_URL, 
    {
        headers: { 'Content-Type': 'application/json' },
    }
    )
    return response.data
}
