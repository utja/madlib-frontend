import React from 'react';
import Story from '../components/story/Story';
import { connect } from 'react-redux';
import { getStory } from '../actions/story'
import Slider from 'react-slick'
import '../assets/css/Story.css';

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
      dots: true
    };
    const mapDrawings = this.props.drawings.map(drawing => <div key={drawing.id} className="drawing"><h1>{drawing.title}</h1><img src={drawing.data_url} alt={drawing.title}/></div>)
    return(
      <div className="story-container">
        <div className="slider-container">
          {this.props.drawings.length ? <Slider {...settings}>{mapDrawings}</Slider> : null}
        </div>
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