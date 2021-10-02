import React from 'react'
import {NavLink} from 'react-router-dom'

export default function NavBar ()  {
    return (
        <nav className="navbar">
            <ul>
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
            </ul>
        </nav> 
     );
}
 