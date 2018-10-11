import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    opacity: 0.8,
    background: 'rgba(245, 255, 250, 0.4)',
    borderRadius: 4,
  }
})

const DrawingCard = ({ classes, drawing }) => {
  return(
    <Grid item xs >
      <Card className={classes.root}>
        <CardContent>
          <img className="drawing" src={drawing.data_url} alt={drawing.title}/>
          <Typography align="center" variant="headline" component="h1">
            {drawing.title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
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