import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { fetchCurrentUser } from '../actions/user'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { loginUser } from '../actions/user'


class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  componentDidMount() {
    if (localStorage.getItem('jwt') && !this.props.loggedIn) this.props.fetchCurrentUser()
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.loginUser(this.state)
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div>
          <h1>You are already signed in</h1>
          <Redirect to="/" />
        </div>
      )
    } else if (this.props.authenticatingUser) {
      return <div>LOADING</div>
    } else {
      return (
        <div>
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
                onChange={this.handleChange}
                value={this.state.username}
                name="username"
              />
              <br/>
              <TextField
                id="login-form-password"
                label="password"
                type="password"
                onChange={this.handleChange}
                value={this.state.password}
                name="password"
              />
              <br/>
            </form>
              <Button form="login-form" type="submit" color="primary">
                Login
              </Button>
          </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return{
    loggedIn: state.user.loggedIn,
    authenticatingUser: state.user.authenticatingUser,
    error: state.user.error,
    failedLogin: state.user.failedLogin,
  }
}

const mapDispatchToProps = /*FUNCTION*/ (dispatch) => {
  return {
    fetchCurrentUser: () => dispatch(fetchCurrentUser()),
    loginUser: (userData) => dispatch(loginUser(userData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)