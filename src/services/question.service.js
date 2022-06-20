//crud
import API from "../api/axios";

export async function getAll(){
    const ALL_QUESTIONS_URL = 'questions/all'

    const response = await API.get(ALL_QUESTIONS_URL, 
    {
        headers: { 'Content-Type': 'application/json' },
    }
    )
    return response.data
}


export async function createQuestion(user_id,category_id,title,body){
    const QUESTION_URL = `questions/ask`
    const data={user_id,category_id,title,body}
    const response = await API.post(QUESTION_URL,data,
        {
            headers: { 'Content-Type': 'application/json'},
        }
        )
        return response.data
    }

export async function getQuestion(id){
        const QUESTION_URL = `questions/question/${id}`
        const response = await API.get(QUESTION_URL, 
            {
                headers: { 'Content-Type': 'application/json' },
            }
            )
            return response.data
}

export async function updateQuestion(id){
        const QUESTION_URL = `questions/question/${id}`
        const response = await API.get(QUESTION_URL, 
            {
                headers: { 'Content-Type': 'application/json', 
            },
            }
            )
            return response.data
}
        
    
export async function deleteQuestion(id){
    const QUESTION_URL = `questions/delete/${id}`
    const response = await API.delete(QUESTION_URL,
        {
            headers: { 
                        'Content-Type': 'application/json'
                     }
        }
        )
        return response.data
    }


    

