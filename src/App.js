import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { compose } from 'redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { Route, Switch, withRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import NotFound from './components/NotFound'
import SignupForm from './components/SignupForm'
import StoriesContainer from './containers/StoriesContainer'
import DrawingsContainer from './containers/DrawingsContainer'
import NewStoryContainer from './containers/NewStoryContainer'
import StoryContainer from './containers/StoryContainer'
import './assets/css/App.css';
import NewDrawingContainer from './containers/NewDrawingContainer';
import { BrowserRouter as Router } from 'react-router-dom'
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

// change to functional component
class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignupForm} />
              <Route path="/stories" component={StoriesContainer} />} />
              <Route exact path="/drawings/new" component={NewDrawingContainer} />
              <Route exact path="/drawings" component={DrawingsContainer} />
              <Route exact path="/profile" component={Profile} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

// export default compose(
//   withRouter(App),
//   withTheme(theme)
// )(App);
// const mapStateToProps = state => {
//   return {
//     selectedStory: state.stories.selectedStory
//   }
// }

// export default withRouter(App);
export default App;
// export default withRouter(connect(mapStateToProps)(App));
