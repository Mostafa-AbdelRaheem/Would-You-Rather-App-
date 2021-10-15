import React, { Component } from 'react';
import LeaderBoardContainer from './leaderBoardContainer';
import NavBar from './navBar';



class LeaderBoard extends React.Component {

    render() { 
        return <div className="homeContainer">
        <NavBar/>
        <LeaderBoardContainer/>

    </div>;;
    }
}
 
export default LeaderBoard;