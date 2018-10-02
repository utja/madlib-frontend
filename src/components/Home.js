import React from 'react'
import { connect } from 'react-redux'
import { fetchCurrentUser } from '../actions/user'
import Loading from './Loading'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/Home.css" 
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 2
  },
  item: {
    border: '1px solid #6796fc',
    borderRadius: 4
  }
});

class Home extends React.Component {

  componentDidMount() {
    // POTENTIAL SECURITY FLAW!!! my tokens don't expire & not blacklisted
    if (localStorage.getItem('jwt') && !this.props.loggedIn) this.props.fetchCurrentUser()
    // if i have a token but don't know who it belongs to, ask the server for that user's data
  }

  render(){
    const { classes } = this.props
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
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <Typography variant="headline">
              Welcome {this.props.user.username}!
            </Typography>
          </Grid>
          <Grid justify="space-evenly" container item className={classes.container}>
            <Grid container justify="center" xs={4} item className={classes.item}>
              <Grid item>
                <Typography variant="display2">
                  Stories
                </Typography>
              </Grid>
            </Grid>
            <Grid container justify="center" xs={4} item className={classes.item}>
              <Grid item>
                <Typography variant="display2">
                  Drawings
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Home))