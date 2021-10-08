import React, { Component } from 'react';
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux';
// import { SET_AUTHED_USER } from './../actions/authedUser';
import users from './../reducers/users';

class Login extends React.Component {
    render() { 

        // handlelogin = (e)=>{

        // }
        const usersId=Object.keys(this.props.users);
        // console.log("login page",usersId);
        return <div className="mainContainer">
                <div className="loginContainer">
                    <h3>LogIn</h3>
                    <p>Please Select User</p>
                    <form id="myForm">
                        <select id="mySelect">
                                {usersId.map(id=><option key={id}>{id}</option>)}
                        </select>
                    {/* <input type="button" onclick="multipleFunc()" value="Select multiple options"> */}
                    </form>
                    <button className="loginBtn">Longin</button>               
                </div>
            </div>
    }
}

function mapStateToProps({users}){
    return{
        users,
    }
}

// function mapDispatchToProps(dispatch){

//     return{
//         setAuthedUser:()=>dispatch(setAuthedUser())
//     }
// }

export default connect(mapStateToProps)(Login);



// handle select
// onChange={(event) =>
//     this.props.handleChange(this.props.book, event.target.value)
// }
// value={this.props.book.shelf}
