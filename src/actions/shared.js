import { getInitialData } from "../utils/api";
import { receivedQuestions,addQuestion } from "./questions";
import { receivedUsers,addQuestionToUser } from "./users";
import { setAuthedUser } from '../actions/authedUser'
import { saveQuestion} from "../utils/api"


const AUTHED_ID = null

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receivedUsers(users))
        dispatch(receivedQuestions(questions))
        // dispatch(setAuthedUser(AUTHED_ID))
      })
  }
} 



export function handleAddQuestion(question){
  return (dispatch,getstate)=>{

      console.log("handleQuestion",question)

      return saveQuestion(
          question
      )
      .then((question)=>dispatch(addQuestion(question)))
      .then((question)=>dispatch(addQuestionToUser(question)))

  }
}
