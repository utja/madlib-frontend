import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
    firstName: '',
    lastName: '',
    avatar: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // dispatch SIGNUP_USER
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value.toLowerCase()
    })
  }

  render(){
    const mapInputs = null
    const { classes } = this.props;
    return(
      <form noValidate autoComplete="off" className={classes.container}>
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
          value={this.state.password}>
        </TextField>
        

        {/* // check if values in the inputs are empty */}
        {Object.values(this.state).includes("") ?
          <Button variant="outlined" disabled color="primary" className={classes.button}>
            Submit
          </Button> 
        :
          <Button onClick={this.handleClick} variant="contained" color="primary" className={classes.button}>
            Submit
          </Button> 
        }
      </form>
    )
  }

}

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {


}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
  )(SignupForm)