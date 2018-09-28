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
      centerMode: true,
      draggable: true,
    };

    console.log({...settings})
    return(
      localStorage.getItem('jwt') && this.props.authenticatingUser ? <Loading/> : 
      <div>

        <div>
          
        <Slider {...settings}>
          <div className="home-page-one">
            <h1>Hello</h1>
            <button>Press me</button>
          </div>
          <div>
            <h1>Home</h1>
          </div>
        </Slider>
        </div>
      </div>
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