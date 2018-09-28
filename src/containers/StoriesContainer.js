import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import StoriesList from '../components/story/StoriesList'
import Story from '../components/story/Story'
import { getStories } from '../actions/story'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import PaletteIcon from '@material-ui/icons/Palette'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import withAuth from '../hocs/withAuth'
import { Route, Switch, withRouter } from 'react-router-dom'
import StoryContainer from './StoryContainer'
import NewStoryContainer from './NewStoryContainer';
import AllStories from '../components/story/AllStories';

// storiesContainer will render when user goes to /stories to see all stories
// this page will have a storyList component that will display story items (based on ratings or by newest?)
// this page will also have an individual story that will display when clicked on from the storyList

const StoriesContainer = props => {
  const { match} = props
  
  return(
    <Switch>
      <Route exact path='/stories/new' component={NewStoryContainer} />
      <Route exact path={`${match.url}/:storyId`} component={StoryContainer} />
      <Route exact path='/stories' component={AllStories} />
    </Switch>
  )
}

export default compose(
  withAuth,
  withRouter,
  )(StoriesContainer)