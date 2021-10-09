import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionStatus from './questionStatus';
import NavBar from './navBar';
import QuestionContainer from './questionContainer'

class Home extends React.Component {
    
    render() {
        console.log("Home page",this.props)
        return <div className="homeContainer">
            <NavBar/>
            <h3 className='text-center'>Questions</h3>
            <QuestionContainer />
        </div>;
    }
}


function mapStateToProps({authedUser,questions}){
    return{
        questions,
        authedUser,
        questionIds:Object.keys(questions).sort((a,b) => questions[b].timestamp-questions[a].timestamp),
    }
}



export default connect(mapStateToProps)(Home);