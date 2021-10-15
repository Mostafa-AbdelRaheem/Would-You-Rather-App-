import React, { Component } from 'react';


class PullQuestion extends React.Component {
    state={
        value:'',

    }

    handleChange=(e)=>{
        this.setState({value:e.target.value})
    }


    handleSubmit = (e)=>{
        e.preventDefault()

        // const{optionOneText,optionTwoText} =this.state
        // const {dispatch} = this.props
        
        // dispatch(handleAddQuestion(this.state))

        // this.setState(()=>({
        //     optionOneText:'',
        //     optionTwoText:'',
        }



    render() { 
        console.log("PULL",this.props)
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

 
export default PullQuestion;

