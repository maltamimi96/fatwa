//crud
import API from "../api/axios";


const QUESTIONS_URL=
{
    URL:"questions",
    URL_ID:"questions/"

}


export async function getAll(){

    const response = await API.get(QUESTIONS_URL.URL, 
    {
        headers: { 'Content-Type': 'application/json' },
    }
    )
    return response.data
}


export async function createQuestion(user_id,category_id,title,body)
{
    const data={user_id,category_id,title,body}
    const response = await API.post(QUESTIONS_URL.URL,data,
        {
            headers: { 'Content-Type': 'application/json'},
        }
        )
        return response.data
    }

export async function getQuestion(id){
        const response = await API.get(QUESTIONS_URL.URL_ID + id, 
            {
                headers: { 'Content-Type': 'application/json' },
            }
            )
            return response.data
}

export async function updateQuestion(id){
        const response = await API.get(QUESTIONS_URL.URL_ID + id, 
            {
                headers: { 'Content-Type': 'application/json', 
            },
            }
            )
            return response.data
}
        
    
export async function deleteQuestion(id){
    const response = await API.delete(QUESTIONS_URL.URL_ID + id,
        {
            headers: { 
                        'Content-Type': 'application/json'
                     }
        }
        )
        return response.data
    }


    

