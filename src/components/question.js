import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers';
// import authedUser from '../reducers/authedUser';
// import users from '../reducers/users';

class Question extends React.Component {
    render() { 
        // console.log(this.props)
        const question = this.props.question
        // console.log(question)
        console.log(question)
        const {
            name,id,timestamp,optionOne,optionTwo,avatar} = question
        return <div className='question'>
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
                </div>;
    }
}
 

function mapStateToProps({authedUser,users,questions},{id}){
    const question =questions[id]

    return{
        authedUser,
        question: formatQuestion(question, users[question.author])
    }
}

export default connect(mapStateToProps)(Question);