import React from 'react'
import { connect } from 'react-redux'
import { Button, TableCell, TableRow} from '@material-ui/core'

const DrawingItem = props => {

  const handleClick = (event) => {
    props.selectDrawing(props.drawing)
    props.selectStory(props.drawing)
  }

  const { drawing: { title, user: { username }} } = props
  
  return(
    <TableRow style={{height: 48}}>
      <TableCell component="th" scope="row">
        {title}
        <br/>
        {username}
      </TableCell>
      <TableCell>
        <Button onClick={handleClick} variant="outlined" color="primary">
          View Drawing
        </Button>
      </TableCell>
    </TableRow>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    selectDrawing: drawing => dispatch({type: 'SET_DRAWING', payload: drawing }),
    // - send whole drawing back to reducer, set the selected story and the username so Story.js can read props.story.username
    selectStory: drawing => dispatch({type: 'SET_STORY_IN_DRAWINGS', payload: drawing})
  }
}

export default connect(null, mapDispatchToProps)(DrawingItem)