import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import WordInput from './WordInput'
import { postStory } from '../../actions/story'
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';


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
    // parse data from server into json
    const parsedWords = this.props.template.words.map(word => JSON.parse(word))
    // set state for each word to control form
    parsedWords.forEach(word => {
      this.setState({
        [word.key]: ''
      })
    })
  }

  componentWillUnmount(){
    // console.log(this.props)
    this.props.unselectTemplate()
  }

  // implement later so that the state will update when selecting different templates
  // componentDidUpdate(prevProps, prevState, snapshot){
    // console.log('previous props are', prevProps)
    // console.log('#####################################')
    // console.log('current props are', this.props)
    // console.log('#####################################')
    // let parsedWords = this.props.template.words.map(word => JSON.parse(word))
    // // debugger
    // parsedWords.forEach(word => {
    //   this.setState({
    //     [word.key]: ''
    //   }, ()=>console.log(this.state))
    // })
  // }


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

  // map props to return an input for each word of the story
  // Object.values(this.state) to check for values?
  render(){
    // console.log(this.props)
    const parsedWords = this.props.template.words.map(word => JSON.parse(word))
    const mapWordInputs = parsedWords.map(word => <WordInput key={word.id} word={word} value={this.state[word.key]} handleChange={this.handleChange} />)
    const { classes } = this.props;
    return (
      <Grid item xs className={classes.container}>
        <form onSubmit={this.handleSubmit} id="create-story-form" noValidate autoComplete="off">
          <TextField
            id="outlined-helperText"
            name="title"
            margin="normal"
            variant="outlined"
            label="title"
            className={classes.textField}
            onChange={this.handleChange}
            fullWidth
            required
            autoFocus
            // ***************************************************************************************************************************
            // react does not like that the value is coming in as props and not set to the local state?
            // the form state comes down as props
            //  value={props.value}
            // **************************************************************************************************************************
          >
          </TextField>
          {mapWordInputs}

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

// export default withStyles(styles)(Template)

export default compose(
  withStyles(styles),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  )(Template)