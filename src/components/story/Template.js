import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import WordInput from './WordInput'
import { postStory } from '../../actions/story'
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'
import { Button, Grid, TextField } from '@material-ui/core';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  textField: {

  },
  container: {
    background: 'rgba(245, 255, 250, 0.2)',
    borderRadius: '25',
  }
});

class Template extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: ""
    }
  }

  componentDidMount(){
    // parse data from server into json - array of hashes coming from API
    const parsedWords = this.props.template.words.map(word => JSON.parse(word))
    // set state for each word to control form
    parsedWords.forEach(word => {
      this.setState({
        [word.key]: ''
      })
    })
  }

  componentWillUnmount(){
    this.props.unselectTemplate()
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value.toLowerCase()
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.postStory(this.state, this.props.template.id, this.props.username, this.state.title)
    this.props.history.push('/stories')
  }

  render(){
    const { template, classes } = this.props
    const parsedWords = template.words.map(word => JSON.parse(word))
    const mapWordInputs = parsedWords.map(word => <WordInput key={word.id} word={word} value={this.state[word.key]} handleChange={this.handleChange} />)
    return (
      <Grid item xs className={classes.container}>
        <form onSubmit={this.handleSubmit} id="create-story-form" noValidate autoComplete="off">
          {mapWordInputs}
          <TextField
            id="outlined-helperText"
            name="title"
            margin="normal"
            variant="outlined"
            label="title for your story"
            className={classes.textField}
            onChange={this.handleChange}
            fullWidth
            required
            // ***************************************************************************************************************************
            // react does not like that the value is coming in as props and not set to the local state?
            // the form state comes down as props
            //  value={props.value}
            // **************************************************************************************************************************
          >
          </TextField>

          {/* // check if values in the inputs are empty */}
          {(Object.values(this.state).includes("") && this.state.title.length === 0) ?
            <Button variant="outlined" disabled color="primary" className={classes.button}>
              Submit
            </Button> 
          :
            <Button form="create-story-form" type="submit" variant="contained" color="primary" className={classes.button}>
              Submit
            </Button> 
          }
        </form>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    username: state.user.user.username
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // set selectedTemplate to null so it does not display when changing routes
    unselectTemplate: () => dispatch({type: 'UNSELECT_TEMPLATE'}),
    postStory: (storyWords, selectedTemplateId, username, title) => dispatch(postStory(storyWords, selectedTemplateId, username, title))
  }
}

export default compose(
  withStyles(styles),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  )(Template)