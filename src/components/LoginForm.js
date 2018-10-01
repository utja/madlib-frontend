import React from 'react'
import { connect } from 'react-redux'
// import { withRouter, Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { loginUser } from '../actions/user'
import Typography from '@material-ui/core/Typography';

//TODO make login dialog popup

class LoginForm extends React.Component{
  state = {
    username: '',
    password: '',
    open: false
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.loginUser(this.state)
    this.props.history.push(this.props.location.pathname);
  }

  render(){
    return(
      <div className="login-form">
        <Button color="secondary" onClick={this.handleOpen}>Login</Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="login-form-dialog-title"
        >
          <DialogTitle id="login-form-dialog-title">Login</DialogTitle>
          <DialogContent>
          <form onSubmit={this.handleSubmit} id="login-form" >
          {this.props.failedLogin ? 
            <Typography paragraph color="error" >
              {/* one error comes back as an aray from server - for signup form there are multiple errors in an array */}
              {this.props.error[0].toLowerCase()}
            </Typography>
            :
            null}
            <TextField
              autoFocus
              id="login-form-username"
              label="username"
              type="username"
              fullWidth
              onChange={this.handleChange}
              value={this.state.username}
              name="username"
            />
            <TextField
              id="login-form-password"
              label="password"
              type="password"
              fullWidth
              onChange={this.handleChange}
              value={this.state.password}
              name="password"
            />
          </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button form="login-form" type="submit" color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    authenticatingUser: state.user.authenticatingUser,
    failedLogin: state.user.failedLogin,
    error: state.user.error,
    loggedIn: state.user.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (userData) => dispatch(loginUser(userData))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))