import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    opacity: 0.8,
    background: 'rgba(245, 255, 250, 0.4)',
    borderRadius: 4,
  }
})

// change to functional
class DrawingCard extends React.Component {

  render(){
    const { classes } = this.props
    return(
      <Grid item xs={4} className={classes.root}>
        <img className="drawing" src={this.props.drawing.data_url} alt={this.props.drawing.title}/>
        <h1 className="cursive" style={{marginTop: 0, marginBlockEnd: 0}}>{this.props.drawing.title}</h1>
      </Grid>

    )
  }

}

const mapStateToProps = state => {
  return {
    drawing: state.drawings.selectedDrawing
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
  )(DrawingCard)