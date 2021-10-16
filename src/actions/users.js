export const RECEIVED_USERS = "RECEIVED_USERS"
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER" 


    
export function addAnswerToUser({authedUser, qid, answer,qauthor}){
    return{
        type:ADD_ANSWER_TO_USER,
        authedUser,
        qid,
        answer,
        qauthor
    }    
}

// function addQuestionAnswer({authedUser, qid, answer}){
//     return{
//         type:ADD_QUESTION_ANSWER,
//         authedUser,
//         qid,
//         answer
//     }
// }

// export function handleAddQuestionAnswer(info){
//     return(dispatch,getstate)=>{

//         console.log("handleAddQuestionAnswer",info)

//         return saveQuestionAnswer(
//             info
//         )
//     //i have swipped then with catch
//         .then((info)=>{
//             console.log("handle info",info)

//             return dispatch(addQuestionAnswer(info))
//         })

//     }
// }





export function receivedUsers(users){
    return{
        type:RECEIVED_USERS,
        users,
    }

}