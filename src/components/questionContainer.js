import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from './../utils/helpers';
import Question from './question';



class QuestionContainer extends React.Component {
    state={
        displayedAnswers:[]
    }

    handleAnswered = ()=>{
        this.setState({displayedAnswers:this.props.answeredQuestions})
    }

    handleUnanswered = ()=>{
        this.setState({displayedAnswers:this.props.unansweredQuestions})
    }

    render() { 

        return (
            <div className='question'>
                <button type="button" className="btn btn-primary m-1" onClick = {this.handleAnswered} >Answered Questions</button>
                <button type="button" className="btn btn-primary" onClick={this.handleUnanswered}>UnAnswered Questions</button>
                {this.state.displayedAnswers.length ===0 && <ul>{this.props.unansweredQuestions.map((question)=>(<li key={question.id}><Question question={question}/></li>))}</ul>}
                <ul>{this.state.displayedAnswers.map((question)=>(<li key={question.id}><Question question={question}/></li>))}</ul>
            </div>
        );
    }
}
function mapStateToProps({authedUser,users,questions}){
    const questionIds =Object.keys(questions).sort((a,b) => questions[b].timestamp-questions[a].timestamp)

    let questionInfoList=[]
    questionIds.forEach(id => {
        questionInfoList.push(formatQuestion(questions[id], users[questions[id].author]))
    });

    let answeredQuestions =[]
    let unansweredQuestions =[]
    questionInfoList.map((question)=>{(
        question.optionTwo.votes.includes(authedUser)||question.optionOne.votes.includes(authedUser))?
        answeredQuestions.push(question):
        unansweredQuestions.push(question)})
    return{
        answeredQuestions,
        unansweredQuestions
    }
}
export default connect(mapStateToProps)(QuestionContainer)
