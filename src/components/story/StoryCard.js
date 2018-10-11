import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Story from './Story';
import { getStory } from '../../actions/story'
import { Button, Grid } from '@material-ui/core'
import PaletteIcon from '@material-ui/icons/Palette'
import { withStyles } from '@material-ui/core/styles';

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