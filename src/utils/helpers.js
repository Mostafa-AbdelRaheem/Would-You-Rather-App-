// export function formatDate (timestamp) {
//     const d = new Date(timestamp)
//     const time = d.toLocaleTimeString('en-US')
//     return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
//   }
  
//   export function formatTweet (tweet, author, authedUser, parentTweet) {
//     const { id, likes, replies, text, timestamp } = tweet
//     const { name, avatarURL } = author
  
//     return {
//       name,
//       id,
//       timestamp,
//       text,
//       avatar: avatarURL,
//       likes: likes.length,
//       replies: replies.length,
//       hasLiked: likes.includes(authedUser),
//       parent: !parentTweet ? null : {
//         author: parentTweet.author,
//         id: parentTweet.id,
//       }
//     }
//   }

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