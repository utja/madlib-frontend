import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import MenuButton from './MenuButton'
import { Link } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const menuItems = [
  {
    id: "home",
    name: "Home",
    link: "/"
  },
  {
    id: "stories",
    name: "View Stories",
    link: "/stories"
  },
  {
    id: "newStory",
    name: "Create a New Story",
    link: "/stories/new"
  }
]

const userItems = [
  {
    id: "profile",
    name: "Profile",
    link: "/profile"
  },
  {
    id: "settings",
    name: "Account Settings",
    link: "/settings"
  },
  // make sure that logout button logs out
  {
    id: "logout",
    name: "Logout",
    link: "/logout"
  }
]

class NavBar extends React.Component {
  state = {
    anchorEl: null
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.target }, ()=> console.log(this.state));
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render(){
    const { loggedIn } = this.props
    const { classes } = this.props;
    return(
      <AppBar position="static">
        <Toolbar>
          <MenuButton items={menuItems} iconType={MenuIcon}/>
          <Typography variant="title" color="inherit" className={classes.grow}>
            Ad Scribitum
          </Typography>
          {/* render signup if not logged in */}
          { loggedIn ? 
            <Fragment>
              <Button /* component={logout fn}*/> >Logout</Button>
              <MenuButton items={userItems} iconType={AccountCircle} /> 
            </Fragment>
          : 
              <Button color="inherit" component={Link} to="/signup">Signup</Button> 
            }
          
        </Toolbar>
      </AppBar>
    )

  }
}

// refactor/destructure
const mapStateToProps = state => {
  return {
    loggedIn: state.user.loggedIn
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
  )(NavBar);