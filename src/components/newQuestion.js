import React, { Component } from 'react';
import NavBar from './navBar';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import authedUser from './../reducers/authedUser';
import { Redirect } from 'react-router-dom';

class NewQuestion extends React.Component {

    state={
        optionOneText:'',
        optionTwoText:'',
        author:'',
        toHome:false
    
    }

    handleOptionOne = (e) =>{
        const optionOneText = e.target.value

        this.setState(()=>({
            optionOneText
        }))
    }


    handleOptionTwo= (e) =>{
        const optionTwoText = e.target.value

        this.setState(()=>({
            optionTwoText,
            author:this.props.authedUser
        }))
    }

    handleSubmit = (e)=>{
        e.preventDefault()

        const{optionOneText,optionTwoText} =this.state
        const {dispatch} = this.props
        
        dispatch(handleAddQuestion(this.state))

        this.setState(()=>({
            optionOneText:'',
            optionTwoText:'',
            toHome:true
        }))

        
        console.log("optionOneText",optionOneText)
        console.log("optionTwoText",optionTwoText)


    }


    render() { 

        if(this.state.toHome===true){
            return <Redirect to='/home'/>
        }

        return (
        <div >
            <NavBar/>
            <div className="newQuestionContainer">
                <h3 className="center">Ask New Question</h3>
                <h4 className="center">Would you rather</h4>
                <form className="newQesution" onSubmit={this.handleSubmit}>
                    <div className="optionOne">
                    <p>Option One</p>
                    <textarea
                    className="textArea"
                    cols="50"
                    placeholder="Please Enter The First Option"
                    value={this.state.optionOneText}
                    onChange={this.handleOptionOne}
                    />
                    </div>
                    <div className="optionTwo">
                    <p>Option Two</p>
                    <textarea 
                    className="textArea"
                    cols="50"
                    placeholder="Please Enter The Second Option"
                    value={this.state.optionTwoText}
                    onChange={this.handleOptionTwo}
                    />
                    </div>
                <button className="newQuestionBtn" type="submit">Submit</button>
                </form>

            </div>
        </div>);
    }
}

function mapStateToProps({authedUser,users,questions}){

    return{
        authedUser,
        users,
        questions,
    }
    }

 
export default connect(mapStateToProps)(NewQuestion);
