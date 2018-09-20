import React from 'react'
import { connect } from 'react-redux'
import StoriesList from '../components/story/StoriesList'
import Story from '../components/story/Story'
// import InteractiveList from '../MaterialList'
import Grid from '@material-ui/core/Grid';

const NewStoryContainer = props => {
  return(

    <Grid className="new-story-container" container justify="space-around">
      <form>
        <input type="text"/>
      </form>
    </Grid>
  )
}

// reducer state key = stories
const mapStateToProps = state => {
  return {
    stories: state.stories,
    selectedStory: state.selectedStory
  }
}

export default connect(mapStateToProps)(NewStoryContainer)