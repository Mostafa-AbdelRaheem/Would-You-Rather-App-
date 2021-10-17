import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './navBar';
import PullQuestion from './PullQuestion';
import PullResult from './PullResult';
import { Redirect } from 'react-router-dom';


class QuestionPage extends React.Component {

    handleAnsweredQuestion=()=>{
        const passedId=this.props.match.params.id
        const questions = this.props.questions
        const question = questions[passedId]
        if((!questions[passedId])){
            return  <Redirect to='/not-found'/>
        }else{
            const avatar = this.props.users[questions[passedId].author].avatarURL
            const name = this.props.users[questions[passedId].author].name
            if(question.optionOne.votes.includes(this.props.authedUser) || question.optionTwo.votes.includes(this.props.authedUser)){
                let selected =''
                if(question.optionOne.votes.includes(this.props.authedUser)){
                    selected="optionOne"
                }else{
                    selected="optionTwo"
                }
                return <PullResult question={questions[passedId]} selected={selected} name={name} avatar={avatar}/>
            }else{
                return <PullQuestion question={questions[passedId]} name={name} avatar={avatar}/>
            }
        }

        
    }




    render() { 
        return (
        <div >
            <h3>Pull Page</h3>
            <NavBar/>
            {this.handleAnsweredQuestion()}
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


