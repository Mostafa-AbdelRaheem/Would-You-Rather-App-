import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux'
import { handleInitialData } from '../actions/shared';

import { BrowserRouter,Route,Redirect,Switch } from 'react-router-dom';
import LeaderBoard from './leaderBoard';
import NavBar from './navBar'
import Home from './home';
import NewQuestion from './newQuestion';
import QuestionStatus from './questionStatus';
import Login from './login';



class App extends React.Component {

componentDidMount(){
  this.props.dispatch(handleInitialData())
}
  render() { 
    return (
        <Fragment>
            <div className="mainContainer">
              {/* <NavBar/>       */}
              {this.props.loading === true
                  ? null
                  :  
                    <Switch>
                    <Route path='/leaderboard' component ={LeaderBoard}/>
                    <Route path='/newquestion' component ={NewQuestion}/>
                    <Route path='/home' component ={Home}/>
                    {/* <Route path='/not-found' component ={NotFound}/> */}
                    <Route path='/'  component ={Login}/>
                    {/* <Redirect to="/not-found"/> */}
                    </Switch>
                  }
            </div>
        </Fragment>
    )
  }
}
function mapStateToProps ({ authedUser }) {
  return {
    // this to make page loading till the data rendered
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App) 
