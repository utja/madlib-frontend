import React from 'react'
import { connect } from 'react-redux'
import { fetchCurrentUser } from '../actions/user'
import Loading from './Loading'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/Home.css" 

class Home extends React.Component {

  componentDidMount() {
    // POTENTIAL SECURITY FLAW!!! my tokens don't expire & not blacklisted
    if (localStorage.getItem('jwt') && !this.props.loggedIn) this.props.fetchCurrentUser()
    // if i have a token but don't know who it belongs to, ask the server for that user's data
  }

  render(){
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      arrows: false,
      draggable: true,
    };
    if (this.props.authenticatingUser) {
      return <Loading/>
    } else if (this.props.loggedIn) {
      return (
        // change welcome page
        <div className="homepage-welcome cursive">
          <h1>Welcome {this.props.user.username}!</h1>
        </div>
      )
    } else {
        return(
          <div className="slider-container">
            <Slider {...settings}>
              <div className="homepage-one">
                <div className="homepage-one-content">
                  <h1 className="header">
                    Create entertaining stories and <br/>
                    share with friends and family
                  </h1>
                  <h2 className="subheader">Sign up today!</h2>
                </div>
              </div>
              <div className="homepage-two">
                <div className="homepage-two-content">
                  <h1 className="header">
                    Bring the imagination of <br/>
                    stories to life 
                  </h1>
                  <h2 className="subheader">Log in to draw your masterpiece!</h2>
                </div>
              </div>
            </Slider>
          </div>
        )
    }
  }
}

const mapStateToProps = state => {
  return{
    loggedIn: state.user.loggedIn,
    authenticatingUser: state.user.authenticatingUser,
    user: state.user.user
  }
}

const mapDispatchToProps = /*FUNCTION*/ (dispatch) => {
  return {
    fetchCurrentUser: () => dispatch(fetchCurrentUser()), //dispatch is automagically provided by redux
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)