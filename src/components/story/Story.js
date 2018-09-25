import React from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions';
import PaletteIcon from '@material-ui/icons/Palette'

const Story = props => {
  console.log(props)
  return(
    // without material ui
    // <div className="story">
    //    <h1>{props.story.title}</h1>
    //    <h2>{props.story.user}</h2>
    //    <p>{props.story.story}</p>
    // </div>

      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Typography align="left" variant="headline" component="h1">
              {props.story.title}
            </Typography>
            <Typography align="left" gutterBottom variant="subheading" component="h1">
              {props.story.user.username}
            </Typography>
            <Typography align="left" component="p">
              {props.story.story}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" variant="contained">
              Create Drawing <PaletteIcon/>
            </Button>
          </CardActions>
        </Card>
      </Grid>

  )
}

const mapStateToProps = state => {
  return {
    story: state.stories.selectedStory
  }
}
export default connect(mapStateToProps)(Story)