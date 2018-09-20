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
      helperText={'i.e. ' + storyWord.examples}
     className={classes.textField}
     onChange={handleChange}
     required
    //  placeholder="Default Value"
     >
    </TextField>
  )

}

export default withStyles(styles)(WordInput)