import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
      <Grid item xs >
        <Card className={classes.root}>
          <CardContent>
            <img className="drawing" src={this.props.drawing.data_url} alt={this.props.drawing.title}/>
            <Typography align="center" variant="headline" component="h1">
              {this.props.drawing.title}
            </Typography>
          </CardContent>
        </Card>
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