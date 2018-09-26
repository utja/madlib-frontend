import React, {Fragment} from 'react'
import { connect } from 'react-redux'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider';

const DrawingItem = props => {
  // console.log('story item props', props)

  const handleClick = (event) => {
    props.selectDrawing(props.drawing)
  }
  // console.log('drawing item props', props)
  const { drawing: { title, user: { username }} } = props
  return(
    <Fragment>
      <ListItem>
        <ListItemText 
          primary={title}
          secondary={username}
          >
        </ListItemText>
        <Button onClick={handleClick} variant="outlined" color="primary">
          View Drawing
        </Button>
        </ListItem>
        <Divider />
    </Fragment>

  )
}

const mapDispatchToProps = dispatch => {
  return { selectDrawing: drawing => dispatch({type: 'SET_DRAWING', payload: drawing })}
}

export default connect(null, mapDispatchToProps)(DrawingItem)