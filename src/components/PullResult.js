import React, { Component } from 'react';
import { pullScore } from './../utils/helpers';


class PullResult extends React.Component {
    render() { 
        const {optionOneLength,optionTwoLength,optionOneScore,optionTwoScore}= pullScore(this.props.question)
        return (
            <div className='question'>
                <div className="autherAsk">Asked by {this.props.name}:</div>
                <div className='question-info'>
                    <div className="avatarBox">
                        <img src={this.props.avatar} alt={`Avatar of ${this.props.name}`} className="avatar"/>
                    </div>
                    <div className="answerBox">
                        <h3>Results:</h3>
                        <div className="optionBox">
                            <p>Would you rather {this.props.question.optionOne.text}</p>
                            
                            <div className="progress">                            
                                <div className="progress-bar" role="progressbar" style={{width: `${optionOneScore}%`}} aria-valuenow={optionOneScore} aria-valuemin="0" aria-valuemax="100">{optionOneScore}%</div>
                            </div>
                            <p>{optionOneLength} vote(s) / {(optionOneLength+optionTwoLength)}vote(s)</p>
                        </div>
                        <div className="optionBox">
                            <p>Would you rather {this.props.question.optionTwo.text} ({optionOneLength}/{(optionOneLength+optionTwoLength)})</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: `${optionTwoScore}%`}} aria-valuenow={optionTwoScore} aria-valuemin="0" aria-valuemax="100">{optionTwoScore}%</div>
                            </div>
                            <p>{optionTwoLength} vote(s) / {(optionOneLength+optionTwoLength)}vote(s)</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default PullResult;