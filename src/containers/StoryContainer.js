import React from 'react';
import Story from '../components/story/Story';
import { connect } from 'react-redux';
import { getStory } from '../actions/story'
import Slider from 'react-slick'
import '../assets/css/Story.css';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 2
  },
  root: {
    opacity: 0.8,
    background: 'rgba(245, 255, 250, 0.4)',
    borderRadius: 4,
  }
});

class StoryContainer extends React.Component {

  componentDidMount(){
    this.props.getStory(this.props.story.id)
  }

  render(){
    const settings = {
      // className: "center",
      // centerMode: true,
      // infinite: false,
      // centerPadding: "60px",
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      dots: true,
      arrows: false
    };
    const { classes } = this.props
    const mapDrawings = this.props.drawings.map(drawing => <div key={drawing.id} className="drawing"><img className="drawing" src={drawing.data_url} alt={drawing.title}/><h1 className="cursive no-margin-top">{drawing.title}</h1><h2 className="cursive">{drawing.user.username}</h2></div>)
    return(
      <Grid container className={classes.container}>
        <Story />
        <Grid item xs={6} className={classes.root}>
          {this.props.drawings.length ? <Slider {...settings}>{mapDrawings}</Slider> : null}
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    story: state.stories.selectedStory,
    drawings: state.drawings.drawings
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getStory: storyId => dispatch(getStory(storyId))
  }
}
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(StoryContainer));