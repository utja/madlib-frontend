import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuth from '../hocs/withAuth'

// const images = {
//   default: 'https://images.pexels.com/photos/419635/notebook-empty-design-paper-419635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//   lion: 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//   dog: 'https://images.pexels.com/photos/69434/pexels-photo-69434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//   cat: 'https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

// }

class Profile extends React.Component {


  render(){
    console.log(this.props)
    return(
      <div>Profile</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

export default compose(
  withAuth,
  connect(mapStateToProps)
)(Profile)