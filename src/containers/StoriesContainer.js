import React from 'react'
import { connect } from 'react-redux'
import StoriesList from '../components/story/StoriesList'
import Story from '../components/story/Story'
import { getStories } from '../actions/story'
// import InteractiveList from '../MaterialList'
import Grid from '@material-ui/core/Grid';

// storiesContainer will render when user goes to /stories to see all stories
// this page will have a storyList component that will display story items (based on ratings or by newest?)
// this page will also have an individual story that will display when clicked on from the storyList
class StoriesContainer extends React.Component{

  componentDidMount(){
    this.props.getStories()
  }

  render(){
    console.log('stories container props', this.props)
    return(
        // without material ui
        // <div className="stories-container">
        //   <StoriesList stories={props.stories.stories}/>
        //   {props.stories.selectedStory ? <Story /> : null}
        //   {/* <InteractiveList /> */}
        // </div>
      <Grid className="stories-container" container justify="space-around">
        <StoriesList stories={this.props.stories.stories}/>
        {this.props.stories.selectedStory ? <Story /> : null}
        {/* <InteractiveList /> */}
      </Grid>
    )
  }
}

// reducer state key = stories
const mapStateToProps = state => {
  return {
    stories: state.stories,
    selectedStory: state.selectedStory
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getStories: () => dispatch(getStories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoriesContainer)