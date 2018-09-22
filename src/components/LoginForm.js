import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'

class LoginForm extends React.Component{
  state = {
    username: '',
    password: ''
  }

  render(){
    return(
      <div>Login</div>
    )
  }

}

const mapStateToProps = state => {


}

const mapDispatchToProps = dispatch => {
  return {
    createUser: (userData) => dispatch()
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)