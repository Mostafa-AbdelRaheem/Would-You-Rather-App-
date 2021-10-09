import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './question';
import QuestionStatus from './questionStatus';
import NavBar from './navBar';
import { formatDate } from './../utils/helpers';
import AnsweredQuestion from './answeredQuestions';
import QuestionContainer from './questionContainer'

class Home extends React.Component {
    
    render() {
        console.log("Home page",this.props.questions)
        return <div className="homeContainer">
            <NavBar/>
            <h3 className='text-center'>Questions</h3>
            <QuestionStatus/>
            <QuestionContainer />
            {/* <ul className='home-list' >
                
                {this.props.questionIds.map((id)=>(
                <li   key={id}>
                   <QuestionContainer id ={id}/> 
                </li>
                        
                ))}
            </ul> */}
        </div>;
    }
}
// function mapStateToProps({questions}){
//     return{
//         questionIds:Object.keys(questions).sort((a,b) => questions[b].timestamp-questions[a].timestamp)
//     }
// }
 

function mapStateToProps({authedUser,questions}){
    // Object.keys(questions).map((question)=>console.log("each",question));
    // console.log("recieved",Object.keys(questions).map((question)=>console.log(questions)));
    return{
        questions,
        questionIds:Object.keys(questions).sort((a,b) => questions[b].timestamp-questions[a].timestamp),
        // answeredQuestion:,
        // unAnsweredQuestion:
    }
}



export default connect(mapStateToProps)(Home);