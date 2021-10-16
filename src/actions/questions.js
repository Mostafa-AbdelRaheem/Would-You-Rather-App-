import { saveQuestionAnswer } from "../utils/api"
import authedUser from './../reducers/authedUser';


export const RECEIVED_QUESTIONS = "RECEIVED_QUESTIONS"
export const ANSWERED_QUESTIONS = "ANSWERED_QUESTIONS"
export const ADD_QUESTION ="ADD_QUESTION"

export const ADD_QUESTION_ANSWER ="ADD_QUESTION_ANSWER"
    

function addQuestionAnswer({authedUser, qid, answer}){
    return{
        type:ADD_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function handleAddQuestionAnswer(info){
    return(dispatch,getstate)=>{

        console.log("handleAddQuestionAnswer",info)

        return saveQuestionAnswer(
            info
        )
        .then((info)=>{
            console.log("handle info",info)

            return dispatch(addQuestionAnswer(info))
        })

    }
}




export function addQuestion(question){
    return{
        type:ADD_QUESTION,
        question
    }
}



export function receivedQuestions(questions){
    return{
        type:RECEIVED_QUESTIONS,
        questions,
    }

}

