import React from 'react'
import StoryItem from './StoryItem'
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';


const StoriesList = props => {
  // console.log('stories list props', props)
  const mapStoryItems = props.stories.map(story => <StoryItem key={story.id} story={story} />)

  return(
    // without material ui
    // <div className="stories-list">
    //   {renderStoryItems}
    // </div>

    <Grid item >
      <List>
        {mapStoryItems}
      </List>
    </Grid>
  )
}

export default StoriesList