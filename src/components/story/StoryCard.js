import React from 'react'
import Story from './Story';
import Button from '@material-ui/core/Button'
import PaletteIcon from '@material-ui/icons/Palette'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getStory } from '../../actions/story'



class StoryCard extends React.Component {

  componentDidMount(){
    this.props.getStory(this.props.story.id)
  }

  render(){
    return(
      <Grid container direction="column" spacing={16}>
        <Story />
        <Grid item>
          <Button className={this.props.classes.button} component={Link} to="/drawings/new" size="large" color="primary" variant="contained">
            Create Drawing <PaletteIcon/>
          </Button>
        </Grid>
        <Grid item>
          <Button className={this.props.classes.button} component={Link} to={`/stories/${this.props.story.id}`} size="large" color="primary" variant="contained">
            View Drawings
          </Button>
        </Grid>
      </Grid>
    )
  }
}

const styles = theme => ({
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  container: {
    padding: theme.spacing.unit * 2
  }
})

const mapStateToProps = state => {
  return {
    story: state.stories.selectedStory
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getStory: storyId => dispatch(getStory(storyId))
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(StoryCard)