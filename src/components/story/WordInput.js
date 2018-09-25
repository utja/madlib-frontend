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

  const { classes, word, handleChange } = props;

  return(
    <TextField
      id="outlined-helperText"
      name={word.key}
      margin="normal"
      variant="outlined"
      label={word.type}
      helperText={word.helper_text}
      className={classes.textField}
      onChange={handleChange}
      required
      placeholder={`e.g. ` + word.examples}
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