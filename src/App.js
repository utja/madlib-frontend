import React, { Component } from 'react';
import './assets/css/App.css';
import StoriesContainer from './containers/StoriesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Ad Scribitum</h1>
        </header>
        <StoriesContainer />
      </div>
    );
  }
}

export default App;
