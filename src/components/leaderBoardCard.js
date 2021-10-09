import React, { Component } from 'react';

class LeaderBoardCard extends React.Component {
    render() { 
        console.log("LeaderBoard card",this.props)
        return (
        <div className='card'>

        <div className="autherAsk">{this.props.user.name}</div>
        <div className='question-info'>
            <div className="avatarBox">
                <img src={this.props.user.avatar} alt={`Avatar of ${this.props.user.name}`} className="avatar"/>
            </div>
            <div className="answerBox">
                <p>Answered Qeustions:<span style={{fontWeight:500}}>{this.props.user.answersScore}</span></p>
                <p>Created Qeustions:<span style={{fontWeight:500}}>{this.props.user.questionsScore}</span></p>

            </div>
            <div className="scoreBox">
                <h3>Score</h3>
                <div>{this.props.user.totalScore}</div>
            </div>
        </div>
    </div>);
    }
}
 


    
export default LeaderBoardCard;