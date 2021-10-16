import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import NavBar from './navBar';
import QuestionContainer from './questionContainer'




class Home extends React.Component {
    
    render() {
        return <div className="homeContainer">
            <NavBar/>
                    <h2 className='text-center'>Questions</h2>
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