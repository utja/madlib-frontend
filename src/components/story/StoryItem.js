import React from 'react'
import { connect } from 'react-redux'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';

const StoryItem = props => {
  console.log('story item props', props)

  const handleClick = (event) => {
    props.selectStory(props.story)
  }
  const { story: { title, user: { username }} } = props
  return(
    <Grid item>
      <ListItem divider >
        <ListItemText primary={title} secondary={username} />
        <Button onClick={handleClick} variant="outlined" color="primary">
          View Story
        </Button>
      </ListItem>
      {/* <Divider /> */}
    </Grid>
  )
}

const mapDispatchToProps = dispatch => {
  return { selectStory: story => dispatch({type: 'SELECT_STORY', payload: story })}
}

export default connect(null, mapDispatchToProps)(StoryItem)