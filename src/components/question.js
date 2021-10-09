import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers';
// import authedUser from '../reducers/authedUser';
// import users from '../reducers/users';
import logger from './../middleware/logger';
import AnsweredQuestion from './answeredQuestions';

class Question extends React.Component {

    render() { 
        const question = this.props.question
        const authedUser = this.props.authedUser
        const {name,id,timestamp,optionOne,optionTwo,avatar} = question
        const optionOneVotes = optionOne.votes
        const optionTwoVotes = optionTwo.votes
        console.log("the question to be passed",this.props.authedUser)
        return (
        <div className='question'>

        {
            (optionOneVotes.includes(authedUser)||optionTwoVotes.includes(authedUser)) ? 
            // (<AnsweredQuestion question ={question}/>
             <h3>AnsweredQuestion</h3>: <h3>UnAnsweredQuestion</h3>
        }
            <div className="autherAsk">{name} asks:</div>
            <div className='question-info'>
                <div className="avatarBox">
                    <img src={avatar} alt={`Avatar of ${name}`} className="avatar"/>
                </div>
                <div className="answerBox">
                    <h3>Would you rather</h3>
                    <p>play football</p>

                    <button className="button">View Pull</button>
                </div>
            </div>
            {/* <AnsweredQuestion question ={question}/> */}
        </div>
        );
    }
}
 

function mapStateToProps({authedUser,users,questions},{id}){
    const question =questions[id]
    const formated_question = formatQuestion(question, users[question.author])
    const optionOneVotes = formated_question.optionOne.votes
    const optionTwoVotes = formated_question.optionTwo.votes
    return{
        authedUser,
        question:formated_question
    
    }
    // if (optionOneVotes.includes(authedUser) || optionTwoVotes.includes(authedUser)){
    //     const answered = formated_question
    //     console.log("answered",answered);

    // }else{
    //     const unAnswered = formated_question
    //     console.log("unAnswered",unAnswered);

    //     return{
    //         authedUser,
    //         question:unAnswered
        
    //     }
    // }

}

export default connect(mapStateToProps)(Question);