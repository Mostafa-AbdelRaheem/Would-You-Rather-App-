import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers';

import logger from './../middleware/logger';

class Question extends React.Component {

    render() { 
        return (
        <div className='question'>
            <div className="autherAsk">{this.props.question.name} asks:</div>
            <div className='question-info'>
                <div className="avatarBox">
                    <img src={this.props.question.avatar} alt={`Avatar of ${this.props.question.name}`} className="avatar"/>
                </div>
                <div className="answerBox">
                    <h3>Would you rather</h3>

                    <p><span>...</span>{this.props.question.optionOne.votes !== 0? this.props.question.optionOne.text: this.props.question.optionTwo.text}<span>...</span></p>

                    <button className="button">View Pull</button>
                </div>
            </div>
        </div>
        );
    }
}

export default Question;