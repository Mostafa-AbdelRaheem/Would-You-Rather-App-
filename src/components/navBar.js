import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux';

class NavBar extends React.Component {
    render() { 
        console.log("nave props",this.props)
        return (
        <nav className="navbar">
            <ul className="navBarList">
                <li>
                    <NavLink to="/home" exact activeClassName='active'>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/newquestion"  activeClassName='active'>New Question</NavLink>
                </li>
                <li>
                    <NavLink to="/leaderboard"  activeClassName='active'>Leader Board</NavLink>
                </li>
                <li>
                    <NavLink to="/"  activeClassName='active'>Login</NavLink>
                </li>
                <li>
                    Logged User: {this.props.authedUser}
                </li>

            </ul>
        </nav> 

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
 