import React from 'react'
import {NavLink} from 'react-router-dom'

export default function QuestionStatus ()  {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/unanswered_questions" exact activeClassName='active'>Unanswered Questions</NavLink>
                </li>
                <li>
                    <NavLink to="/answered_questions"  activeClassName='active'>Answered Questions</NavLink>
                </li>
            </ul>
        </nav> 
     );
}