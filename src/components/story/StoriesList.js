import React from 'react'
import StoryItem from './StoryItem'
import Grid from '@material-ui/core/Grid';

const StoriesList = props => {
  // debugger
  const mapStoryItems = props.stories.map(story => <StoryItem key={story.id} story={story} />)
  return(
    // <Grid className={classes.container} container justify="space-around">    
      //   <StoriesList stories={this.props.stories}/>
      //   {this.props.selectedStory ? 
      //     <Grid container item xs direction="column" justify="flex-start" alignItems="center" spacing={24}>
      //       <Grid item>
      //         <Story />
      //       </Grid>
      //       <Grid item>
      //         <Button className={this.props.classes.button} component={Link} to="/drawings/new" size="large" color="primary" variant="contained">
      //           Create Drawing <PaletteIcon/>
      //         </Button>
      //       </Grid>
      //       <Grid item>
      //         <Button className={this.props.classes.button} component={Link} to={`/stories/${this.props.selectedStory.id}`} size="large" color="primary" variant="contained">
      //           View Drawings
      //         </Button>
      //       </Grid>
      //     </Grid>
      //   : null}
      // </Grid>
      <Grid item container direction="column" xs={4}>
        <h1 className="cursive">Stories</h1>
        <Grid item container direction="column-reverse">
          {mapStoryItems}
        </Grid>
      </Grid>
  )
}

export default StoriesList