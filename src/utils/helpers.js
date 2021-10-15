
  export function formatQuestion (question, author) {
    const { id,timestamp,optionOne,optionTwo } = question
    const { name, avatarURL } = author
  
    return {
      name,
      id,
      timestamp,
      optionOne,
      optionTwo,
      avatar: avatarURL,
      }
    }


    export function formatuser (user) {
      const { id,name,avatarURL,answers,questions } = user
      const answersScore = Object.keys(answers).length
      const totalScore = (answersScore+questions.length)
    
      return {
        id,
        name,
        answersScore,
        questionsScore:questions.length,
        totalScore,
        avatar: avatarURL 

        }
      }

      export function pullScore (question) {
        const { optionOne,optionTwo } = question
        const optionOneLength = Object.keys(optionOne.votes).length 
        const optionTwoLength = Object.keys(optionTwo.votes).length
        const totalScore = (optionOneLength+optionTwoLength)


        const optionOneScore = (optionOneLength/totalScore)*100
        const optionTwoScore =(optionTwoLength/totalScore)*100

      
        return {
          optionOneLength,
          optionTwoLength,
          optionOneScore,
          optionTwoScore
  
          }
        }
