import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { createUser } from '../actions/user'

const images = {
  default: 'https://images.pexels.com/photos/419635/notebook-empty-design-paper-419635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  lion: 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  dog: 'https://images.pexels.com/photos/69434/pexels-photo-69434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  cat: 'https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

}


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
    lastName: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('hello')
    this.props.createUser(this.state)
    // debugger
    // this.setState({
    //   username: '',
    //   password: '',
    //   firstName: '',
    //   lastName: ''
    // })
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
          <Button type="submit" onClick={this.handleSubmit} variant="contained" color="primary" className={classes.button}>
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
  return {
    createUser: (userData) => dispatch(createUser(userData))
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
  )(SignupForm)