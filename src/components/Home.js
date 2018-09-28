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
      // autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      arrows: false,
      centerMode: true,
      draggable: true,
    };
    if (localStorage.getItem('jwt') && this.props.authenticatingUser) {
      return <Loading/>
    } else if (this.props.loggedIn) {
      return <h1>Logged in</h1>
    } else {
        return(
          <div className="slider-container">
            <Slider {...settings}>
              <div className="homepage-one">
                <div className="homepage-content">
                  <h1 className="header-one">
                    Create and Share Entertaining Stories <br></br>
                    with Friends and Family
                  </h1>
                  <h2 className="subheader-one">Sign up today!</h2>
                </div>
              </div>
              <div>
                <h1>Home</h1>
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
    authenticatingUser: state.user.authenticatingUser
  }
}

const mapDispatchToProps = /*FUNCTION*/ (dispatch) => {
  return {
    fetchCurrentUser: () => dispatch(fetchCurrentUser()), //dispatch is automagically provided by redux
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)