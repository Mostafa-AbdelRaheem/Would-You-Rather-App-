import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux';

class NavBar extends React.Component {
    render() { 
        return (
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
                    <NavLink to="/logout"  activeClassName='active'>Logout</NavLink>
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
 