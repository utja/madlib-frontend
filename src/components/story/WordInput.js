import React from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }
})

const WordInput = props => {
  

  // console.log('wordinput props are', props)
  const { classes, storyWord, handleChange } = props;

  return(
    <TextField
      id="outlined-helperText"
      name={storyWord.name}
      margin="normal"
      variant="outlined"
      label={storyWord.category}
      helperText={'e.g. ' + storyWord.examples}
     className={classes.textField}
     onChange={handleChange}
     required

    // ***************************************************************************************************************************
    // react does not like that the value is coming in as props and not set to the local state?
    // the form state comes down as props
    //  value={props.value}
    // **************************************************************************************************************************
     >
    </TextField>
  )

}

export default withStyles(styles)(WordInput)