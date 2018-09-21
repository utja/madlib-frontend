import React from 'react';
import WordInput from './WordInput'
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  container: {
    // display: 'flex',
    // flexWrap: 'wrap',
  }
});

class StoryForm extends React.Component {
  constructor(props){
    super(props)
    this.state ={

    }
  }

  componentDidMount(){
    this.props.storyWords.forEach(storyWord => {
      this.setState({
        [storyWord.name]: ""
      })
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value.toLowerCase()
    })
  }

  handleClick = (event) => {
    console.log('hello')
  }

  // map props to return an input for each word of the story
  // Object.values(this.state) to check for values?
  render(){
    const mapWordInputs = this.props.storyWords.map(storyWord => <WordInput key={storyWord.id} value={this.state[storyWord.name]} storyWord={storyWord} handleChange={this.handleChange}/>)
    const { classes } = this.props;
    return (
      <form noValidate autoComplete="off" className={classes.container}>
        {/* render mapped inputs */}
        
        {mapWordInputs}

        {/* // check if values in the inputs are empty */}
        {Object.values(this.state).includes("") ?
          <Button variant="outlined" disabled color="primary" className={classes.button}>
            Submit
          </Button> 
        :
          <Button onClick={this.handleClick} variant="contained" color="primary" className={classes.button}>
            Submit
          </Button> 
        }
      </form>
    )
  }
}

export default withStyles(styles)(StoryForm)