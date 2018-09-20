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
  

  console.log(props)
  const { classes, storyWord } = props;

  return(
    <TextField
      id="outlined-helperText"
      label={storyWord.category}
      // placeholder="Default Value"
      // className={classes.textField}
      helperText={'i.e. ' + storyWord.examples}
      margin="normal"
      variant="outlined"
     className={classes.textField}>
    </TextField>
  )

}

export default withStyles(styles)(WordInput)