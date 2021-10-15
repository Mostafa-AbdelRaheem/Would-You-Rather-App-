import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestionAnswer } from '../actions/questions';


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
        let answer=""

        if(this.state.value === this.props.question.optionOne.text){
            answer = "optionOne"
            console.log("first conidtion called")
            console.log("answer",answer)
            
        }else{
            answer = "optionTwo"
            console.log("else conidtion called")
            console.log("answer",answer)
        }
        console.log("button clicked")
        // this.state.value === this.props.question.optionOne.text
        // const{optionOneText,optionTwoText} =this.state
        console.log("authedUser",authedUser)
        dispatch(handleAddQuestionAnswer({authedUser,qid,answer}))

        }
        // questions[qid][answer].votes

    render() { 
        console.log("PULL props",this.props)
        const  qid =this.props.question.id
        console.log("PULL props questions",this.props.questions[qid]["optionTwo"].votes)
        console.log("PULL state",this.state.value)
        console.log("optionOne",this.props.question.optionOne.text)
        console.log("optionTwo",this.props.question.optionTwo.text)
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

