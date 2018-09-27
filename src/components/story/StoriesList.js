import React from 'react'
import StoryItem from './StoryItem'
import Grid from '@material-ui/core/Grid';

const StoriesList = props => {
  const mapStoryItems = props.stories.map(story => <StoryItem key={story.id} story={story} />)
  return(
    <Grid item container direction="column-reverse" xs={4}>
        {mapStoryItems}
    </Grid>
  )
}

export default StoriesList