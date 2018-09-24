import React, { Fragment } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { createUser } from '../actions/user'
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    // backgroundColor: '#69F0AE'
  }
});

class SignupForm extends React.Component{
  state = {
    username: '',
    password: '',
    passwordConfirmation: '',
    firstName: '',
    lastName: '',
    open: false
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createUser(this.state)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render(){
    const { classes } = this.props;
    const errorMessages = {
      usernameDuplicate: 'Username has already been taken',
      passwordLength: 'Password is too short (minimum is 8 characters)',
      passwordConfirmation: "Password confirmation doesn't match Password"
    }
    const mapErrors = this.props.error ? this.props.error.map((e,i) => {
      return(
        <Typography key={i} color="error" >
          {e.toLowerCase()}
        </Typography>
      )
    }) : null
    return(
      // this.props.loggedIn ? <Redirect to="/" /> :
        <div className="signup-form">
        <Button onClick={this.handleOpen}>Signup</Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="signup-form-dialog-title"
        >
        <DialogTitle id="signup-form-dialog-title">Signup</DialogTitle>
        <DialogContent>

        <form id="signup-form" noValidate autoComplete="off" className={classes.container} onSubmit={this.handleSubmit}>
          {this.props.failedSignup ? 
            mapErrors
            :
            null}
          <TextField
            id="input-first-name"
            autoFocus
            name='firstName'
            margin="normal"
            fullWidth
            label='first name'
            className={classes.textField}
            onChange={this.handleChange}
            required
            value={this.state.firstName} />
          <TextField
            id="input-last-name"
            name='lastName'
            margin="normal"
            fullWidth
            label='last name'
            className={classes.textField}
            onChange={this.handleChange}
            required
            value={this.state.lastName} />
          <TextField
            id="input-username"
            name='username'
            margin="normal"
            fullWidth
            label='username'
            className={classes.textField}
            onChange={this.handleChange}
            required
            error={this.props.error ? this.props.error.includes(errorMessages.usernameDuplicate) : false}
            value={this.state.username} />
          <TextField
            id="input-password"
            name='password'
            margin="normal"
            fullWidth
            label='password'
            type="password"
            className={classes.textField}
            onChange={this.handleChange}
            required
            error={this.props.error ? this.props.error.includes(errorMessages.passwordConfirmation) || this.props.error.includes(errorMessages.passwordLength) : false}
            value={this.state.password} />
          <TextField
            id="input-password-confirmation"
            name='passwordConfirmation'
            margin="normal"
            fullWidth
            label='confirm password'
            type="password"
            className={classes.textField}
            onChange={this.handleChange}
            required
            error={this.props.error ? this.props.error.includes(errorMessages.passwordConfirmation) : false}
            value={this.state.passwordConfirmation} />

          {/* // check if values in the inputs are empty */}
          <DialogActions>

          {Object.values(this.state).includes("") ?
            <Fragment>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button variant="outlined" disabled color="primary" className={classes.button}>
                signup
              </Button> 
            </Fragment>
          :
            <Fragment>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button form="signup-form" type="submit" variant="contained" color="primary" className={classes.button}>
                signup
              </Button> 
            </Fragment>
          }
          </DialogActions>
        </form>
        </DialogContent>
        </Dialog>
        </div>
    )
  }

}

// TODO refactor by deconstructing
const mapStateToProps = state => {
  return {
    authenticatingUser: state.user.authenticatingUser,
    failedSignup: state.user.failedSignup,
    error: state.user.error,
    loggedIn: state.user.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: (userData) => dispatch(createUser(userData))
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
  )(SignupForm)