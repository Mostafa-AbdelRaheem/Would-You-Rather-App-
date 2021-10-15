import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './navBar';
import PullQuestion from './PullQuestion';
import PullResult from './PullResult';


class QuestionPage extends React.Component {

    handleAnsweredQuestion=()=>{


        const passedId=this.props.match.params.id
        const questions = this.props.questions
        const avatar = this.props.users[questions[passedId].author].avatarURL
        const name = this.props.users[questions[passedId].author].name
        const question = questions[passedId]
        if(question.optionOne.votes.includes(this.props.authedUser) || question.optionTwo.votes.includes(this.props.authedUser)){
            return <PullResult question={questions[passedId]} name={name} avatar={avatar}/>
        }else{
            return <PullQuestion question={questions[passedId]} name={name} avatar={avatar}/>
        }
        
        
        // <Pull question={questions[passedId]} name={name} avatar={avatar}/>:
        // <PullQuestion question={questions[passedId]} name={name} avatar={avatar}/>



        
        // questionInfoList.map((question)=>{(
        //     question.optionTwo.votes.includes(this.props.authedUser)||question.optionOne.votes.includes(this.props.authedUser))?
        //     answeredQuestions.push(question):
        //     unansweredQuestions.push(question)})
    }




    render() { 
        // /question/:am8ehyc8byjqgar0jgpub9
        const passedId=this.props.match.params.id
        const questions = this.props.questions
        const avatar = this.props.users[questions[passedId].author].avatarURL
        const name = this.props.users[questions[passedId].author].name
        console.log("questionPage",this.props)
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
            {this.handleAnsweredQuestion()}
            {/* <PullQuestion question={questions[passedId]} name={name} avatar={avatar}/> */}
            {/* question={question} */}
            {/* <div className="autherAsk"></div>
            <div className="question-info"></div> */}
            


        </div>);
    }
}

function mapStateToProps({authedUser,users,questions}){

    return{
        authedUser,
        questions,
        users
    }
}
 
export default connect(mapStateToProps)(QuestionPage);


