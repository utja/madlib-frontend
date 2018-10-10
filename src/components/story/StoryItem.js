import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const StoryItem = props => {

  const handleClick = (event) => {
    props.selectStory(props.story)
  }
  const { story: { id, title} } = props
  return(
    <TableRow key={id} style={{height: 48}}>
      <TableCell component="th" scope="row">
        {title}
      </TableCell>
      <TableCell>
        <Button onClick={handleClick} variant="outlined" color="primary">
          View Story
        </Button>
      </TableCell>
    </TableRow>
  )
}

const mapDispatchToProps = dispatch => {
  return { selectStory: story => dispatch({type: 'SELECT_STORY', payload: story })}
}

export default connect(null, mapDispatchToProps)(StoryItem)