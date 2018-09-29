import React from 'react';
import Story from '../components/story/Story';
import { connect } from 'react-redux';
import { getStory } from '../actions/story'

class StoryContainer extends React.Component {

  componentDidMount(){
    // dispatch action to fetch drawings for particular story
    this.props.getStory(this.props.story.id)
  }

  render(){
    console.log(this.props)
    return(
      <div className="story-container">
        <Story/>
        
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(StoryContainer);