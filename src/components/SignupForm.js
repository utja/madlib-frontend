import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { createUser } from '../actions/user'
import Typography from '@material-ui/core/Typography';

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
    backgroundColor: '#69F0AE'
  }
});

class SignupForm extends React.Component{
  state = {
    username: '',
    password: '',
    passwordConfirmation: '',
    firstName: '',
    lastName: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createUser(this.state)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value.toLowerCase()
    })
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
      this.props.loggedIn ? 
        <Redirect to="/" />
        :
        <form noValidate autoComplete="off" className={classes.container}>
          {this.props.failedLogin ? 
            mapErrors
            :
            null}
          <TextField
            id="input-first-name"
            name='firstName'
            margin="normal"
            variant="filled"
            label='first name'
            className={classes.textField}
            onChange={this.handleChange}
            required
            value={this.state.firstName}>
          </TextField>
          <TextField
            id="input-last-name"
            name='lastName'
            margin="normal"
            variant="filled"
            label='last name'
            className={classes.textField}
            onChange={this.handleChange}
            required
            value={this.state.lastName}>
          </TextField>
          <TextField
            id="input-username"
            name='username'
            margin="normal"
            variant="filled"
            label='username'
            className={classes.textField}
            onChange={this.handleChange}
            required
            error={this.props.error ? this.props.error.includes(errorMessages.usernameDuplicate) : false}
            value={this.state.username}>
          </TextField>
          <TextField
            id="input-password"
            name='password'
            margin="normal"
            variant="filled"
            label='password'
            type="password"
            className={classes.textField}
            onChange={this.handleChange}
            required
            error={this.props.error ? this.props.error.includes(errorMessages.passwordConfirmation) || this.props.error.includes(errorMessages.passwordLength) : false}
            value={this.state.password}>
          </TextField>
          <TextField
            id="input-password-confirmation"
            name='passwordConfirmation'
            margin="normal"
            variant="filled"
            label='confirm password'
            type="password"
            className={classes.textField}
            onChange={this.handleChange}
            required
            error={this.props.error ? this.props.error.includes(errorMessages.passwordConfirmation) : false}
            value={this.state.passwordConfirmation}>
          </TextField>

          {/* // check if values in the inputs are empty */}
          {Object.values(this.state).includes("") ?
            <Button variant="outlined" disabled color="primary" className={classes.button}>
              signup
            </Button> 
          :
            <Button type="submit" onClick={this.handleSubmit} variant="contained" color="primary" className={classes.button}>
              signup
            </Button> 
          }
        </form>
    )
  }

}

// TODO refactor by deconstructing
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
    createUser: (userData) => dispatch(createUser(userData))
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
  )(SignupForm)