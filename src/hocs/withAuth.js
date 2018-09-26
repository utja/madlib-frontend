import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { fetchCurrentUser } from '../actions/user'

const withAuth = /*FUNCTION*/ (WrappedComponent) => {
  class AuthorizedComponent extends React.Component {
    componentDidMount() {
      // POTENTIAL SECURITY FLAW!!! my tokens don't expire & not blacklisted
      if (localStorage.getItem('jwt') && !this.props.loggedIn) this.props.fetchCurrentUser()
      // if i have a token but don't know who it belongs to, ask the server for that user's data
    }

    render() {
      if (localStorage.getItem('jwt') && this.props.loggedIn) {
        //i have a token and i'm logged in
        // wrapped component in our case is Profile
        return <WrappedComponent />
      } else if (localStorage.getItem('jwt') && this.props.authenticatingUser) {
        //we're currently fetching, show a loading spinner
        return <div>LOADING</div>
      } else {
        //user is not AUTHORIZED to see this component
        return <Redirect to="/login" />
      }
    }
  }

  const mapStateToProps = /*FUNCTION*/ (state) => {
    return {
      loggedIn: state.user.loggedIn,
      authenticatingUser: state.user.authenticatingUser
    }
  }

  const mapDispatchToProps = /*FUNCTION*/ (dispatch) => {
    return {
      fetchCurrentUser: () => dispatch(fetchCurrentUser()), //dispatch is automagically provided by redux
    }
  }

  // const connectedToReduxHOC = connect(mapStateToProps, mapDispatchToProps)
  // const connectedAuthorizedComponent = connectedToReduxHOC(AuthorizedComponent)
  // return connectedAuthorizedComponent

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthorizedComponent)
}

export default withAuth