import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './question';
import QuestionStatus from './questionStatus';

class Home extends React.Component {
    
    render() {
        return <div className="homeContainer">
            <h3 className='text-center'>Questions</h3>
            <QuestionStatus/>
            <ul className='home-list' >
                {this.props.questionIds.map((id)=>(
                <li   key={id}>
                   <Question id ={id}/> 
                </li>
                        
                ))}
            </ul>
        </div>;
    }
}
function mapStateToProps({questions}){
    return{
        questionIds:Object.keys(questions).sort((a,b) => questions[b].timestamp-questions[a].timestamp)
    }
}
 
export default connect(mapStateToProps)(Home);