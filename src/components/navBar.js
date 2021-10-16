import React from 'react'
import {NavLink,Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';


class NavBar extends React.Component {
    state={
        value:null,
        tologin:false
    }

    // handlelogin = (e) =>{
    //     const value = e.target.value
    //     this.setState(()=>({
    //         value
    //     }))
    // }

    handleLogout = (e)=>{
        e.preventDefault()
        const {dispatch} = this.props
        dispatch(setAuthedUser(this.state.value))
        this.setState(()=>({
            tologin:true
        }))
    }

    render() { 
        console.log("value",this.state.value)
        if(this.state.tologin===true){
            return <Redirect to='//logout'/>
        }

        return (
            <div className="navContainer">
                <nav className="navbar">
                    <ul className="navBarList">
                        <li>
                            <NavLink to="/" exact activeClassName='active'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/add"  activeClassName='active'>New Question</NavLink>
                        </li>
                        <li>
                            <NavLink to="/leaderboard"  activeClassName='active'>Leader Board</NavLink>
                        </li>
                        <li>
                            <NavLink to="/logout"  activeClassName='active'>switch the user</NavLink>
                        </li>
                    </ul>
                </nav> 
                <div>
                    <div className="user">
                        <p>Logged User: {this.props.authedUser}</p>
                        <div className="navAvatarBox">
                            <img src={this.props.users[this.props.authedUser].avatarURL} alt={`Avatar of ${this.props.users[this.props.authedUser].name}`} className="avatar"/>
                        </div>
                        <button onClick={this.handleLogout}>logout</button>
                    </div>
                </div>
            </div>
                 
    

        );
    }

    
    
}
function mapStateToProps({authedUser,users}){

    return{
        authedUser,
        users
    }
}
 
export default connect(mapStateToProps)(NavBar);
 