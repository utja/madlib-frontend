import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

const Loading = props => {
  const { classes } = props;
  return (
    <div>
      <Typography variant="display3" gutterBottom>
        Loading
      </Typography>
      <CircularProgress className={classes.progress} variant="indeterminate" color="primary" size={100} thickness={5} />
    </div>
  );
}

Loading.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loading);