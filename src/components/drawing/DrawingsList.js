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
    <Grid item >
      <List>
        <h1>Drawings List</h1>
        {mapDrawingItems}
      </List>
    </Grid>
  )
}

export default DrawingsList