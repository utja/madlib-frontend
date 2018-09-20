import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuButton from './MenuButton'

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
    auth: true,
    anchorEl: null,
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.target }, ()=> console.log(this.state));
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render(){
    const { classes } = this.props;
    return(
      <AppBar position="static">
        <Toolbar>
          <MenuButton items={menuItems} iconType={MenuIcon}/>
          <Typography variant="title" color="inherit" className={classes.grow}>
            Ad Scribitum
          </Typography>
          <MenuButton items={userItems} iconType={AccountCircle} />
        </Toolbar>
      </AppBar>
    )

  }
}

export default withStyles(styles)(NavBar);