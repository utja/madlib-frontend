import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getStories } from '../../actions/story'
import StoriesList from './StoriesList'
import StoryCard from './StoryCard';
import withAuth from '../../hocs/withAuth'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  container: {
    padding: theme.spacing.unit * 2
  }
})

class AllStories extends React.Component {

  componentDidMount() {
    this.props.getStories()
  }

  render(){
    const { classes, stories, selectedStory } = this.props
    return(
      <Grid className={classes.container} container justify="space-around">
        <StoriesList stories={stories}/>
        {selectedStory ? 
          <Grid container item xs direction="column" alignItems="center" spacing={24}>
            <Grid item>
              <StoryCard/>
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
  withAuth,
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
  )(AllStories)