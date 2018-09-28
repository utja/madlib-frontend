import React from 'react'
import Grid from '@material-ui/core/Grid';
import StoriesList from './StoriesList'
import { withStyles } from '@material-ui/core/styles';
import withAuth from '../../hocs/withAuth'
import { getStories } from '../../actions/story'
import { connect } from 'react-redux'
import { compose } from 'redux'
import StoryCard from './StoryCard';

const styles = theme => ({
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  container: {
    padding: theme.spacing.unit * 2
  }
})

class AllStories extends React.Component {
  
  componentDidMount(){
    this.props.getStories()
  }

  render(){
    const { classes} = this.props
    return(
      <Grid className={classes.container} container justify="space-around">    
        <StoriesList stories={this.props.stories}/>
        {this.props.selectedStory ? 
          <Grid container item xs direction="column" justify="flex-start" alignItems="center" spacing={24}>
            <Grid item>
              <StoryCard/>
            </Grid>
          </Grid>
        : null}
      </Grid>
    )
  }
}

// export default AllStories
const mapStateToProps = state => {
  return {
    stories: state.stories.stories,
    selectedStory: state.stories.selectedStory
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getStories: () => dispatch(getStories())
  }
}


export default compose(
  withAuth,
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
  )(AllStories)