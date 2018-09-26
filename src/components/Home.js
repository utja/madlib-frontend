import React from 'react'
import { connect } from 'react-redux'
import withAuth from '../hocs/withAuth'

const Home = props => {
  return(
    props.loggedIn ? <div>Home</div> : <div>Please Login</div>
  )
}

const mapStateToProps = state => {
  return{
    loggedIn: state.user.loggedIn
  }
}

export default withAuth(connect(mapStateToProps)(Home))