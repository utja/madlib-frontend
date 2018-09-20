import React, {Fragment} from 'react'
import { connect } from 'react-redux'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider';

const StoryItem = props => {
  // console.log('story item props', props)

  const handleClick = (event) => {
    props.selectStory(props.story)
  }

  const { user, title } = props.story
  return(
    // without materiaul UI
    // <div onClick={handleClick}>
    //   <h1>{title}</h1>
    //   <h2>{user}</h2>
    //   <button>View Story</button>
    // </div>

    <Fragment>
      <ListItem>
        <ListItemText 
          primary={title}
          secondary={user}>
        </ListItemText>
        <Button onClick={handleClick} variant="outlined" color="primary">
          View Story
        </Button>
        </ListItem>
        <Divider />
    </Fragment>

  )
}

const mapDispatchToProps = dispatch => {
  return { selectStory: story => dispatch({type: 'SELECT_STORY', payload: story })}
}

export default connect(null, mapDispatchToProps)(StoryItem)