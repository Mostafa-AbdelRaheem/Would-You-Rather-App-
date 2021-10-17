import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux'
import { handleInitialData } from '../actions/shared';
import {Route,Switch,Redirect } from 'react-router-dom';
import LeaderBoard from './leaderBoard';
import Home from './home';
import NewQuestion from './newQuestion';
import QuestionPage from './questionPage';
import Login from './login';
import NotFound from './NotFound';



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
                    <Route path='/questions/:id' component ={QuestionPage}/>
                    <Route path='/logout'  component ={Login}/>
                    <Route path='/not-found' component ={NotFound}/>
                    <Route path='/'  component ={Home}/>
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
