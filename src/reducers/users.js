import { RECEIVED_USERS,ADD_ANSWER_TO_USER } from '../actions/users'


export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVED_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_ANSWER_TO_USER:
      const {authedUser, qid, answer,qauthor} =action
      let added =[state[authedUser].answers][0]
      added[qid]=answer
      console.log("current location",added)

      return{
        ...state,
        [authedUser]:{...state[authedUser],
        ["answers"]:added}
      }
    default :
      return state
  }
} 