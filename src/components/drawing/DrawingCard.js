import React from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';

class DrawingCard extends React.Component {

  render(){
    return(
      <Grid item>
        <h1 className="cursive">{this.props.drawing.title}</h1>
        <img src={this.props.drawing.data_url} alt={this.props.drawing.title}/>
      </Grid>

    )
  }

}

const mapStateToProps = state => {
  return {
    drawing: state.drawings.selectedDrawing
  }
}
export default connect(mapStateToProps)(DrawingCard)