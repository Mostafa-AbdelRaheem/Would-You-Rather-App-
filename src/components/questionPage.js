import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './navBar';
import Pull from './Pull';

class QuestionPage extends React.Component {
    render() { 
        // /question/:am8ehyc8byjqgar0jgpub9
        const passedId=this.props.match.params.id
        const questions = this.props.questions
        const avatar = this.props.users[questions[passedId].author].avatarURL
        const name = this.props.users[questions[passedId].author].name
        // console.log("questionPage",this.props)
        // console.log("AVATAR",this.props.users[questions[passedId].author].avatarURL)
        // console.log("AVATAR",avatar)
        // console.log("Name",name)
        
        // [questions.author]
        // console.log("questions",questions)
        // console.log("match",passedId)
        // console.log("req Question",questions[passedId].author)
        return (
        <div >
            <h3>Pull Page</h3>
            <NavBar/>
            <Pull question={questions[passedId]} name={name} avatar={avatar}/>
            {/* question={question} */}
            {/* <div className="autherAsk"></div>
            <div className="question-info"></div> */}
            


        </div>);
    }
}

function mapStateToProps({users,questions}){

    return{
        questions,
        users
    }
}
 
export default connect(mapStateToProps)(QuestionPage);


