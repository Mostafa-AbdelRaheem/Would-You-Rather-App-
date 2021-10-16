import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestionAnswer } from '../actions/questions';
import { addAnswerToUser } from '../actions/users';

class PullQuestion extends React.Component {
    state={
        value:'',

    }

    handleChange=(e)=>{
        this.setState({value:e.target.value})
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const {dispatch ,authedUser, question} =this.props
        const qid = question.id
        const qauthor = this.props.questions[qid].author
        let answer=""

        if(this.state.value === this.props.question.optionOne.text){
            answer = "optionOne"       
        }else{
            answer = "optionTwo"
            
        }
        dispatch(handleAddQuestionAnswer({authedUser,qid,answer}))
        dispatch(addAnswerToUser({authedUser, qid, answer,qauthor}))

        }


    render() { 
        const  qid =this.props.question.id
        return (
            <div className='question'>
                <div className="autherAsk">{this.props.name} asks:</div>
                <div className='question-info'>
                    <div className="avatarBox">
                        <img src={this.props.avatar} alt={`Avatar of ${this.props.name}`} className="avatar"/>
                    </div>
                    <div className="answerBox">
                        
                        <form onSubmit={this.handleSubmit}>
                            <h3>Would you rather</h3>
                            <label>
                                <input type="radio"
                                        value={this.props.question.optionOne.text}
                                        checked={this.state.value === this.props.question.optionOne.text}
                                        onChange={this.handleChange}/>
                                        {this.props.question.optionOne.text}
                            </label>
                            <br/>                             
                            <label>
                                <input type="radio"
                                        value={this.props.question.optionTwo.text}
                                        checked={this.state.value === this.props.question.optionTwo.text}
                                        onChange={this.handleChange}/>
                                        {this.props.question.optionTwo.text}
                            </label>
                            <button className="pullBtn" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps({authedUser,users,questions}){

    return{
        authedUser,
        users,
        questions,
    }
    }

 
export default connect(mapStateToProps)(PullQuestion);

