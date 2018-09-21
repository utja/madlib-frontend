import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import StoriesContainer from './containers/StoriesContainer'
import NewStoryContainer from './containers/NewStoryContainer'
import './assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <h1 className="App-title">Welcome to Ad Scribitum</h1>
        </header> */}
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/stories" component={StoriesContainer} />
          <Route exact path="/stories/new" component={NewStoryContainer} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
