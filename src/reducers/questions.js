import { act } from 'react-dom/test-utils';
import { RECEIVED_QUESTIONS,ADD_QUESTION,ADD_QUESTION_ANSWER } from './../actions/questions';
import authedUser from './authedUser';

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVED_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION:
        const {question} = action 

        return{
          ...state,
          [action.question.id]:action.question,
        }
    case ADD_QUESTION_ANSWER:
      const answerkeysList =Object.keys(state[action.qid][action.answer])
    
      return{
        ...state,
        [action.qid]:{...state[action.qid],
          [action.answer]:{...state[action.qid][action.answer],
            [answerkeysList[0]]:state[action.qid][action.answer]["votes"].concat([action.authedUser])}}}
      
    default :
      return state
  }
} 