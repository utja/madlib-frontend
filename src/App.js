import React, { Component } from 'react';
import { compose } from 'redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import StoriesContainer from './containers/StoriesContainer'
import NewStoryContainer from './containers/NewStoryContainer'
import './assets/css/App.css';
import NewDrawingContainer from './containers/NewDrawingContainer';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#69F0AE',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>

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
          <Route exact path="/drawings/new" component={NewDrawingContainer} />
        </Switch>
      </div>
      </MuiThemeProvider>
    );
  }
}

// export default compose(
//   withRouter(App),
//   withTheme(theme)
// )(App);

// export default withRouter(App);
export default withRouter(App);
