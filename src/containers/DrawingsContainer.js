import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import DrawingsList from '../components/drawing/DrawingsList'
import withAuth from '../hocs/withAuth'
import { getDrawings } from '../actions/drawing'
import DrawingCard from '../components/drawing/DrawingCard'
import Story from '../components/story/Story'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

// storiesContainer will render when user goes to /stories to see all stories
// this page will have a storyList component that will display story items (based on ratings or by newest?)
// this page will also have an individual story that will display when clicked on from the storyList

const styles = {
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
  }
}
class DrawingsContainer extends React.Component{

  componentDidMount(){
    this.props.getDrawings()
  }

  render(){
    // console.log('drawings container props', this.props)
    return(
        // without material ui
        // <div className="stories-container">
        //   <StoriesList stories={props.stories.stories}/>
        //   {props.stories.selectedStory ? <Story /> : null}
        //   {/* <InteractiveList /> */}
        // </div>

      //TODO - Reverse Image Order - newest to oldest
      // Also show the story for the drawing that is selected for user reference
      //################################
      <Grid className="drawings-container" container justify="space-around">
        <DrawingsList drawings={this.props.drawings}/>
        {this.props.selectedDrawing ? <Story/> : null}
        {this.props.selectedDrawing ? <DrawingCard/> : null}
      </Grid>
    )
  }
}

// reducer state key = stories
const mapStateToProps = state => {
  return {
    drawings: state.drawings.drawings,
    selectedDrawing: state.drawings.selectedDrawing,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDrawings: () => dispatch(getDrawings())
  }
}

export default compose(
  withAuth,
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
  )(DrawingsContainer)