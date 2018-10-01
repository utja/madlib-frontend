import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import NotFound from './components/NotFound'
import SignupForm from './components/SignupForm'
import StoriesContainer from './containers/StoriesContainer'
import DrawingsContainer from './containers/DrawingsContainer'
import './assets/css/App.css';
import NewDrawingContainer from './containers/NewDrawingContainer';
import { BrowserRouter as Router } from 'react-router-dom'

const theme = createMuiTheme({
  palette: {
    primary: {
      // main: '#69F0AE',
      main: '#6796fc',
    },
    secondary: {
      main: '#ffffff'
    }
  },
  typography: {
    fontFamily: [
      'Architects Daughter',
      'cursive'
    ].join(','),
    body2: {
      fontSize: 20,
    },
    headline: {
      fontWeight: 500,
      fontSize: 32,
    }
  }

});

const App = props => {
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

export default App;