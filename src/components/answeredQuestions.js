import React, { Component } from 'react';

class AnsweredQuestion extends React.Component {
    render() { 
        const question = this.props.question
        const {name,id,timestamp,optionOne,optionTwo,avatar} = question
        console.log("Answered Component")
        return (
        <div>
            <h3>Hello</h3>
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
        </div>
        );
    }
}
 
export default AnsweredQuestion;