export const RECEIVED_QUESTIONS = "RECEIVED_QUESTIONS"


export function receivedQuestions(questions){
    return{
        type:RECEIVED_QUESTIONS,
        questions,
    }

}
