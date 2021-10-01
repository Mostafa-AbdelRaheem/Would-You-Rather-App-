import { getInitialData } from "../utils/api";
import { receivedQuestions } from "./questions";
import { receivedUsers } from "./users";
import { setAuthedUser } from '../actions/authedUser'


const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receivedUsers(users))
        dispatch(receivedQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
} 

