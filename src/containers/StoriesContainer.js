import React from 'react'
import StoriesList from '../components/story/StoriesList'
import Story from '../components/story/Story'
import { connect } from 'react-redux'

// storiesContainer will render when user goes to /stories to see all stories
// this page will have a storyList component that will display story items (based on ratings or by newest?)
// this page will also have an individual story that will display when clicked on from the storyList
const StoriesContainer = props => {
  return(
      <div className="stories-container">
        <StoriesList stories={props.stories.stories}/>
        {props.stories.selectedStory ? <Story /> : null}
      </div>
  )
}

// reducer state key = stories
const mapStateToProps = state => {
  return {
    stories: state.stories,
    selectedStory: state.selectedStory
  }
}

export default connect(mapStateToProps)(StoriesContainer)