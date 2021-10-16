import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux'
import { handleInitialData } from '../actions/shared';

import { BrowserRouter,Route,Redirect,Switch } from 'react-router-dom';
import LeaderBoard from './leaderBoard';
import NavBar from './navBar'
import Home from './home';
import NewQuestion from './newQuestion';
import QuestionStatus from './questionStatus';
import QuestionPage from './questionPage';
import Login from './login';




class App extends React.Component {

componentDidMount(){
  this.props.dispatch(handleInitialData())
}
  render() { 
    return (
        <Fragment>
            <div className="mainContainer">
            {this.props.authedUser === null
                  ? <Login/>
                  :  
                    <Switch>
                    <Route path='/leaderboard' component ={LeaderBoard}/>
                    <Route path='/add' component ={NewQuestion}/>
                    <Route path='/question/:id' component ={QuestionPage}/>
                    {/* <Route path='/not-found' component ={NotFound}/> */}
                    <Route path='/logout'  component ={Login}/>
                    <Route path='/'  component ={Home}/>
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
    authedUser
  }
}

export default connect(mapStateToProps)(App) 
