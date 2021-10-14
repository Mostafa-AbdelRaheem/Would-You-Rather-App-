import { saveQuestion } from "../utils/api"
import authedUser from './../reducers/authedUser';


export const RECEIVED_QUESTIONS = "RECEIVED_QUESTIONS"
export const ANSWERED_QUESTIONS = "ANSWERED_QUESTIONS"
export const ADD_QUESTION ="ADD_QUESTION"
    

function addQuestion(question){
    return{
        type:ADD_QUESTION,
        question
    }
}


export function handleAddQuestion(question){
    return (dispatch,getstate)=>{
        // const {authedUser} = getstate()
        
        // const {optionOneText, optionTwoText} =questionLocalState
        // const question = {optionOneText, optionTwoText,auther:authedUser}
        console.log("handleQuestion",question)

        return saveQuestion(
            question
        )
        .then((question)=>dispatch(addQuestion(question)))

    }
}

export function receivedQuestions(questions){
    return{
        type:RECEIVED_QUESTIONS,
        questions,
    }

}

