import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import StoriesContainer from './containers/StoriesContainer'
import './assets/css/App.css';

class App extends Component {
  render() {
    return (
      <Router >
        <div className="App">
          {/* <header className="App-header">
            <h1 className="App-title">Welcome to Ad Scribitum</h1>
          </header> */}
          <NavBar />
          <Route exact path="/stories" component={StoriesContainer} />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
