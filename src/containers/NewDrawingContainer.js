import React from 'react'
import Story from '../components/story/Story'
import Canvas from '../components/drawing/Canvas'
import Grid from '@material-ui/core/Grid';
import withAuth from '../hocs/withAuth'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  container: {
    padding: theme.spacing.unit * 2
  }
})

class NewDrawingContainer extends React.Component {

  render(){
    const { classes } = this.props
    return(
      <Grid container className={classes.container} spacing={16}>
        {/* <Grid item xs> */}
          <Story/>
          <Canvas />
        {/* </Grid>         */}
        {/* <Grid item container> */}
        {/* </Grid> */}
      </Grid>
    )
  }
}

export default withAuth(withStyles(styles)(NewDrawingContainer))