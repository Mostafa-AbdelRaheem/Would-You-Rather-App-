import React, { Component } from 'react';
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux';
// import { SET_AUTHED_USER } from './../actions/authedUser';
import users from './../reducers/users';
import { Redirect } from 'react-router-dom';


class Login extends React.Component {
    state={
        value:'',
        toHome:false
    }

    handlelogin = (e) =>{
        const value = e.target.value
        this.setState(()=>({
            value
        }))
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const {dispatch} = this.props
        dispatch(setAuthedUser(this.state.value))
        this.setState(()=>({
            toHome:true
        }))
    }

    render() { 
        if(this.state.toHome===true){
            return <Redirect to='/'/>
        }

        const usersId=Object.keys(this.props.users);
        return <div className="mainContainer">
                <div className="loginContainer">
                    <h3>LogIn</h3>
                    <p>Please Select User</p>
                    <form id="myForm" onSubmit={this.handleSubmit} >
                        <select id="mySelect"  onChange={this.handlelogin}>
                                <option >Select user Please..</option>
                                {usersId.map(id=><option value={id} key={id}>{id}</option>)}
                        </select>
                        <button className="loginBtn">Longin</button> 
                    </form>
                </div>
            </div>
    }
}

function mapStateToProps({users}){
    return{
        users,
    }
}

export default connect(mapStateToProps)(Login);