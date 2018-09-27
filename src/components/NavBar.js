import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import LoginForm from './LoginForm'
import MenuButton from './MenuButton'
import { withRouter } from 'react-router-dom'
import { AppBar, Avatar, Button, Toolbar, Typography, withStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import SignupForm from './SignupForm';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 100,
  },
  avatar: {
    width: 50,
    height: 50,
    margin: 0,
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
    id: "drawings",
    name: "View Drawings",
    link: "/drawings"
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
]



class NavBar extends React.Component {

  handleLogout = () => {
    localStorage.removeItem('jwt')
    this.props.dispatch({type: 'LOGOUT'})
    this.props.history.push("/")
  }
  
  // userAvatar = () => {
  //   return (
  //     <Avatar src={this.props.user.avatar} />
  //   )
  // }

  render(){
    const { loggedIn } = this.props
    const { classes } = this.props;
    const userAvatar = () => <Avatar src={this.props.user.avatar} className={classes.avatar} />
    const avatarPadding = {padding: 7}
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
              <Button onClick={this.handleLogout}/* component={logout fn}*/>Logout</Button>
              
              <MenuButton items={userItems} styling={avatarPadding} iconType={userAvatar} ></MenuButton> 
            </Fragment>
          : 
            <Fragment>
              <SignupForm />
              {!loggedIn && this.props.location.pathname === "/login" ? null : <LoginForm /> }
            </Fragment>
          }
          
        </Toolbar>
      </AppBar>
    )

  }
}

// refactor/destructure
const mapStateToProps = state => {
  return {
    loggedIn: state.user.loggedIn,
    user: state.user.user
  }
}

export default compose(
  withStyles(styles),
  withRouter,
  connect(mapStateToProps)
  )(NavBar);