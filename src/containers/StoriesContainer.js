import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import StoriesList from '../components/story/StoriesList'
import Story from '../components/story/Story'
import { getStories } from '../actions/story'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import PaletteIcon from '@material-ui/icons/Palette'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';


// storiesContainer will render when user goes to /stories to see all stories
// this page will have a storyList component that will display story items (based on ratings or by newest?)
// this page will also have an individual story that will display when clicked on from the storyList

const styles = theme => ({
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  container: {
    padding: theme.spacing.unit * 2
  }
})

class StoriesContainer extends React.Component{

  componentDidMount(){
    this.props.getStories()
  }

  render(){
    const { classes} = this.props
    return(
      <Grid className={classes.container} container justify="space-around">    
        <StoriesList stories={this.props.stories}/>
        {this.props.selectedStory ? 
          <Grid container item xs direction="column" alignItems="center" spacing={24}>
            <Story />
            <Grid item>
              <Button className={this.props.classes.button} component={Link} to="/drawings/new" size="large" color="primary" variant="contained">
                Create Drawing <PaletteIcon/>
              </Button>
            </Grid>
            <Grid item>
              <Button className={this.props.classes.button} component={Link} to="/drawings/new" size="large" color="primary" variant="contained">
                View Drawings
              </Button>
            </Grid>
          </Grid>
        : null}
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    stories: state.stories.stories,
    selectedStory: state.stories.selectedStory
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getStories: () => dispatch(getStories())
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
  )(StoriesContainer)