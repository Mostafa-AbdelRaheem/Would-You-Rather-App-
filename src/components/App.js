import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux'
import { handleInitialData } from '../actions/shared';

import { BrowserRouter,Route,Redirect,Switch } from 'react-router-dom';
import LeaderBoard from './leaderBoard';
import NavBar from './navBar'
import Home from './home';
import NewQuestion from './newQuestion';
import QuestionStatus from './questionStatus';



class App extends React.Component {

componentDidMount(){
  this.props.dispatch(handleInitialData())
}
  render() { 
    return (
      <BrowserRouter>
        <Fragment>
            <div className="mainContainer">
              <NavBar/>      
              {this.props.loading === true
                  ? null
                  : 
                    <Switch>
                    <Route path='/leaderboard' component ={LeaderBoard}/>
                    <Route path='/newquestion' component ={NewQuestion}/>
                    <Route path='/unanswered_questions' component ={QuestionStatus}/>
                    <Route path='/answered_questions' component ={QuestionStatus}/>
                    <Route path='/' component ={Home}/>
                    </Switch>
                  }
            </div>
        </Fragment>
      </BrowserRouter>
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
