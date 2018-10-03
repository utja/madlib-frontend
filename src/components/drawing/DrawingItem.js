import React from 'react'
import { connect } from 'react-redux'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';

const DrawingItem = props => {
  // console.log('story item props', props)

  const handleClick = (event) => {
    props.selectDrawing(props.drawing)
    props.selectStory(props.drawing)
  }
  // console.log('drawing item props', props)
  const { drawing: { title, user: { username }} } = props
  // debugger
  return(
    <Grid item>
      <ListItem divider>
        <ListItemText 
          primary={title}
          secondary={username}
          >
        </ListItemText>
        <Button onClick={handleClick} variant="outlined" color="primary">
          View Drawing
        </Button>
        </ListItem>
    </Grid>

  )
}

const mapDispatchToProps = dispatch => {
  return {
    selectDrawing: drawing => dispatch({type: 'SET_DRAWING', payload: drawing }),
    // TODO - finish commenting - send whole drawing back to reducer, set the selected story and the username so Story.js can read props.story.username
    selectStory: drawing => dispatch({type: 'SET_STORY_IN_DRAWINGS', payload: drawing})
  }
}

export default connect(null, mapDispatchToProps)(DrawingItem)