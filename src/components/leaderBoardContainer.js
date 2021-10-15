import React, { Component } from 'react';
import {connect} from 'react-redux'
import LeaderBoardCard from './leaderBoardCard';
import { formatuser } from '../utils/helpers';


class LeaderBoardContainer extends React.Component {
    render() { 
        const {sortedUserInfoList} = this.props
        const output = sortedUserInfoList.map((user)=>(console.log("user",user.id)))
        console.log("sortedUserInfoList",sortedUserInfoList.length)
        return (
        <div>
            <h2 className='text-center'>Leader Board</h2>
            {this.props.sortedUserInfoList.map((user)=>(<ul><li key={user.id}><LeaderBoardCard user={user}/></li></ul>))}
        </div>)
    }
}

const  compare = (a,b)=> {
    console.log("a",a);
    return  a.totalScore < b.totalScore ? 1 : -1;
}

function mapStateToProps({authedUser,users,questions}){
    const  usersId =Object.keys(users)
    console.log("usersId",usersId)
    const userInfoList=[]

    console.log("users",users)
    usersId.forEach(user => {
            userInfoList.push(formatuser(users[user]))
        });
    console.log("userInfoList",userInfoList)
    const sortedUserInfoList = [...userInfoList].sort( (a,b)=> compare(a,b))
    // console.log("sortedUserInfoList",sortedUserInfoList)

    return{
        authedUser,
        users,
        questions,
        sortedUserInfoList
    }
    }

    
 
export default connect(mapStateToProps)(LeaderBoardContainer);