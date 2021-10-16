export const RECEIVED_USERS = "RECEIVED_USERS"
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER" 
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER"



export function addQuestionToUser(question){
    return{
        type:ADD_QUESTION_TO_USER,
        question
    }
}

export function addAnswerToUser({authedUser, qid, answer,qauthor}){
    return{
        type:ADD_ANSWER_TO_USER,
        authedUser,
        qid,
        answer,
        qauthor
    }    
}


export function receivedUsers(users){
    return{
        type:RECEIVED_USERS,
        users,
    }

}