import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Story = props => {
  return(
    <Grid item xs>
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
      </Card>
    </Grid>
  )
}

const mapStateToProps = state => {
  return {
    story: state.stories.selectedStory
  }
}
export default compose(
  connect(mapStateToProps)
)(Story)