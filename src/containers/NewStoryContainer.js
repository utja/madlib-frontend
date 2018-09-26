import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
// import StoryForm from '../components/story/StoryForm'
import Template from '../components/story/Template'
import TemplatesList from '../components/story/TemplatesList'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { getTemplates } from '../actions/story'
import withAuth from '../hocs/withAuth'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class NewStoryContainer extends React.Component {

  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  componentDidMount(){
    this.props.getTemplates()
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
 

  render(){
    // const { classes } = this.props;
    // console.log(this.props)
    return(
      // abstract form out so that forms for different stories can be rendered based on the props coming down
    <Grid className="new-story-container" container justify="space-around">
      <TemplatesList templates={this.props.templates} />
        {/* <StoryForm storyWords={this.props.storyWords} /> */}
        {/* <StoryForm template={this.props.selectedTemplate} /> */}
        {this.props.selectedTemplate ? <Template template={this.props.selectedTemplate} /> : null}
    </Grid>
  )
  }
}

// reducer state key = stories
const mapStateToProps = state => {
  return {
    stories: state.stories.stories,
    selectedStory: state.stories.selectedStory,
    storyWords: state.stories.storyWords,
    templates: state.stories.templates,
    selectedTemplate: state.stories.selectedTemplate
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTemplates: () => dispatch(getTemplates())
  }
}

export default compose(
  withStyles(styles),
  withAuth,
  connect(mapStateToProps, mapDispatchToProps)
  )(NewStoryContainer)

// export default connect(mapStateToProps)(withStyles(styles)(NewStoryContainer))