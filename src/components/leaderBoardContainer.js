import React, { Component } from 'react';
import {connect} from 'react-redux'
import LeaderBoardCard from './leaderBoardCard';
import { formatuser } from '../utils/helpers';


class LeaderBoardContainer extends React.Component {


    render() { 
        console.log("container props",this.props)
        return (
        <div>
            <h1>LeaderBoard</h1>
            {this.props.sortedUserInfoList.map((user)=>(<u><li key ={user.id}><LeaderBoardCard user={user}/></li></u>))}
        </div>)
    }
}


const  compare = (a,b)=> {
    console.log("a",a);
    return  a.totalScore < b.totalScore ? 1 : -1;
}

function mapStateToProps({authedUser,users,questions}){
    const  usersId =Object.keys(users)
    const userInfoList=[]

    // usersId.forEach(id => {
    //     userInfoList.push(formatuser(users[id]))
    // });

    console.log("users",users)
    usersId.forEach(user => {
            userInfoList.push(formatuser(users[user]))
        });
    console.log("userInfoList",userInfoList)
    const sortedUserInfoList = [...userInfoList].sort( (a,b)=> compare(a,b))
    console.log("sortedUserInfoList",sortedUserInfoList)

    return{
        authedUser,
        users,
        questions,
        sortedUserInfoList
    }
    }

    
 
export default connect(mapStateToProps)(LeaderBoardContainer);