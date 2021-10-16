import { getInitialData } from "../utils/api";
import { receivedQuestions,addQuestion } from "./questions";
import { receivedUsers,addQuestionToUser } from "./users";
import { saveQuestion} from "../utils/api"



export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receivedUsers(users))
        dispatch(receivedQuestions(questions))
      })
  }
} 



export function handleAddQuestion(question){
  return (dispatch,getstate)=>{


      return saveQuestion(
          question
      )
      .then((question)=>dispatch(addQuestion(question)))
      .then((question)=>dispatch(addQuestionToUser(question)))

  }
}
