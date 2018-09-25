import React from 'react'
import Story from '../components/story/Story'
import Canvas from '../components/drawing/Canvas'
import Grid from '@material-ui/core/Grid';
class NewDrawingContainer extends React.Component {

  render(){
    return(
      <Grid container className="new-drawing-container">
        {/* <Story/> */}
        <Canvas />
      </Grid>
    )
  }
}

export default NewDrawingContainer