import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from './../utils/helpers';

class QuestionContainer extends React.Component {
    state={
        displayedAnswers:[]
    }

    handleAnswered = ()=>{
        // console.log("button clicked",this.props.answeredQuestions)
        this.setState({displayedAnswers:this.props.answeredQuestions})
        // console.log("button clicked",this.state)


        return <ul >{this.state.displayedAnswers.map((question)=>(<li key={question.id}>{question} </li>))}</ul>


    }
    handleQuestions =()=>{

        return <ul>{this.props.questionIds.map((id)=>(<li key={id}>{id}</li>))}</ul>
    }

    render() { 
        this.props.answeredQuestions.map((question)=>{console.log(question.id)})
        console.log("Container props",this.props.answeredQuestions)
        console.log("Container state",this.state)
        // const question = this.props.formated_question
        // const authedUser = this.props.authedUser
        // const {name,id,timestamp,optionOne,optionTwo,avatar} = question
        // const optionOneVotes = optionOne.votes
        // const optionTwoVotes = optionTwo.votes
        // console.log("the question to be passed",this.props.authedUser)
        return (
            <div className='question'>
                <button onClick = {this.handleAnswered} >Answered Questions</button>
                <button>UnAnswered Questions</button>
                {this.state.displayedAnswers.length ===0 && <ul>{this.props.answeredQuestions.map((question)=>(<li key={question.id}>{question.id}</li>))}</ul>}
                <ul>{this.state.displayedAnswers.map((question)=>(<li key={question.id}>{question.id}</li>))}</ul>
                {/* {this.state.displayedAnswers} */}
                {/* {this.handleAnswered} */}
                {/* <ul className='home-list' >
                {this.state.displayedAnswers.map((question)=>(
                <li key={question.id}>{question} 
                </li>
                ))}
            </ul> */}
{/* 
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
                </div> */}
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
    console.log("questionInfoList",questionInfoList)
    

    let answeredQuestions =[]
    let unansweredQuestions =[]

    questionInfoList.map((question)=>{(
        question.optionTwo.votes.includes(authedUser)||question.optionOne.votes.includes(authedUser))?
        answeredQuestions.push(question):
        unansweredQuestions.push(question)})
    
    console.log("AnsweredQuestions",answeredQuestions)
    console.log("unansweredQuestions",unansweredQuestions)
    
    // (optionOneVotes.includes(authedUser)||optionTwoVotes.includes(authedUser)) ? 
    // // (<AnsweredQuestion question ={question}/>
    //  <h3>AnsweredQuestion</h3>: <h3>UnAnsweredQuestion</h3>

    // <ul>{this.props.questionIds.map((id)=>(<li key={id}>{id}</li>))}</ul>

    return{
        answeredQuestions,
        unansweredQuestions
        // authedUser,
        // questions,
        // users,
        // questionIds:Object.keys(questions).sort((a,b) => questions[b].timestamp-questions[a].timestamp)
    
    }
}
export default connect(mapStateToProps)(QuestionContainer)


// function mapStateToProps({authedUser,questions}){
//     // Object.keys(questions).map((question)=>console.log("each",question));
//     // console.log("recieved",Object.keys(questions).map((question)=>console.log(questions)));
//     return{
//         questions,
//         questionIds:Object.keys(questions).sort((a,b) => questions[b].timestamp-questions[a].timestamp),
//         // answeredQuestion:,
//         // unAnsweredQuestion:
//     }
// }