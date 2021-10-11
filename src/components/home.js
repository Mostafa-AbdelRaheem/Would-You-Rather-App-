import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './navBar';
import QuestionContainer from './questionContainer'
import Login from './login';



class Home extends React.Component {
    
    handlelogin = ()=>{
        console.log("authurzaition ",this.props.authedUser)
    }
    
    render() {
        console.log("Home page",this.props)
        return <div className="homeContainer">
            {this.props.authedUser===null &&<Login/>}
            <NavBar/>
            {this.handlelogin()}
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