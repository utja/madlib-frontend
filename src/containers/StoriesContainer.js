import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import StoriesList from '../components/story/StoriesList'
import Story from '../components/story/Story'
import { getStories } from '../actions/story'
// import InteractiveList from '../MaterialList'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
// import CardActions from '@material-ui/core/CardActions';
// import Card from '@material-ui/core/Card';
import PaletteIcon from '@material-ui/icons/Palette'
import { Link } from 'react-router-dom'
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
        <StoriesList stories={this.props.stories}/>
        <Grid item xs={6}>

        {this.props.selectedStory ? 
        <Fragment>
        <Story />
        <Grid item xs={6}>

        {/* <Card >
          <CardActions> */}
            <Button className={this.props.classes.button} component={Link} to="/drawings/new" size="small" color="primary" variant="contained">
              Create Drawing <PaletteIcon/>
            </Button>
          {/* </CardActions>
        </Card> */}
        </Grid>
        </Fragment>
        : null}
        {/* <InteractiveList /> */}
        
        </Grid>
      </Grid>
    )
  }
}

// reducer state key = stories
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