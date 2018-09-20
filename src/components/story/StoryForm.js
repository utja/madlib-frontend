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

const StoryForm = props => {

  const mapWordInputs = props.storyWords.map(storyWord => <WordInput key={storyWord.id} storyWord={storyWord} />)
  const { classes } = props;
  // map props to return an input for each word of the story
  return (
    <form noValidate autoComplete="off" className={classes.container}>
      {/* render mapped inputs */}
      {mapWordInputs}
      <Button variant="contained" color="primary" className={classes.button}>
        Submit
      </Button>
    </form>
  )
}

export default withStyles(styles)(StoryForm)