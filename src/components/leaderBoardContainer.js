import React, { Component } from 'react';
import {connect} from 'react-redux'
import LeaderBoardCard from './leaderBoardCard';
import { formatuser } from '../utils/helpers';


class LeaderBoardContainer extends React.Component {
    render() { 
        const {sortedUserInfoList} = this.props
        return (
        <div>
            <h2 className='text-center'>Leader Board</h2>
            {this.props.sortedUserInfoList.map((user)=>(<ul><li key={user.id}><LeaderBoardCard user={user}/></li></ul>))}
        </div>)
    }
}

const  compare = (a,b)=> {
    return  a.totalScore < b.totalScore ? 1 : -1;
}

function mapStateToProps({authedUser,users,questions}){
    const  usersId =Object.keys(users)
    const userInfoList=[]

    usersId.forEach(user => {
            userInfoList.push(formatuser(users[user]))
        });

    const sortedUserInfoList = [...userInfoList].sort( (a,b)=> compare(a,b))

    return{
        authedUser,
        users,
        questions,
        sortedUserInfoList
    }
    }
 
export default connect(mapStateToProps)(LeaderBoardContainer);