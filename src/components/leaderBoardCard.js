import React, { Component } from 'react';

class LeaderBoardCard extends React.Component {
    render() { 
        return (
        <div className='card'>

        <div className="userName">{this.props.user.name}</div>
        <div className='cardInfo'>
            <div className="avatarBox">
                <img src={this.props.user.avatar} alt={`Avatar of ${this.props.user.name}`} className="avatar"/>
            </div>
            <div className="resultBox">
                <p>Answered Qeustions:<span style={{fontWeight:500}}>{this.props.user.answersScore}</span></p>
                <p>Created Qeustions:<span style={{fontWeight:500}}>{this.props.user.questionsScore}</span></p>

            </div>
            <div className="scoreBox">
                <h3>Score</h3>
                <div className="scoreBackground">
                <div className="scoreNumber">{this.props.user.totalScore}</div>
                </div>
                
            </div>
        </div>
    </div>);
    }
}
 
    
export default LeaderBoardCard;