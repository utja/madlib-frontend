import React from 'react'
// import { connect } from 'react-redux'
// import StoryItem from './StoryItem'
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import DrawingItem from './DrawingItem'


const DrawingsList = props => {
  // console.log('drawings list props', props)
  const mapDrawingItems = props.drawings.map(drawing => <DrawingItem key={drawing.id} drawing={drawing}/>)
  return(
    // <Grid item >
    //   <List>
    //     <h1 className="cursive">Drawings</h1>
    //     {mapDrawingItems}
    //   </List>
    // </Grid>
    // <Grid item >
    //   <List>
    //     <h1 className="cursive">Drawings</h1>
    //     {mapDrawingItems}
    //   </List>
    // </Grid>

    // <Grid item container direction="column" xs={4}>
    //     <h1 className="cursive">Stories</h1>
    //     <Grid item container direction="column-reverse">
    //       {mapStoryItems}
    //     </Grid>
    //   </Grid>

    <Grid item container direction="column" xs={4}>
      <h1 className="cursive">Drawings</h1>
        <Grid item container direction="column-reverse">
          {mapDrawingItems}
        </Grid>
    </Grid>
  )
}

export default DrawingsList