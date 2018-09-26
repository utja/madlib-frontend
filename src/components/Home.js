import React from 'react'
import { connect } from 'react-redux'
import withAuth from '../hocs/withAuth'
import { fetchCurrentUser } from '../actions/user'

class Home extends React.Component {

  componentDidMount() {
    // POTENTIAL SECURITY FLAW!!! my tokens don't expire & not blacklisted
    if (localStorage.getItem('jwt') && !this.props.loggedIn) this.props.fetchCurrentUser()
    // if i have a token but don't know who it belongs to, ask the server for that user's data
  }

  render(){
    return(
      localStorage.getItem('jwt') && this.props.authenticatingUser ? <div>Loading</div> : <div>Home</div>
    )
  }
}

const mapStateToProps = state => {
  return{
    loggedIn: state.user.loggedIn,
    authenticatingUser: state.user.authenticatingUser
  }
}

const mapDispatchToProps = /*FUNCTION*/ (dispatch) => {
  return {
    fetchCurrentUser: () => dispatch(fetchCurrentUser()), //dispatch is automagically provided by redux
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)