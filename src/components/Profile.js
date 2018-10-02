import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuth from '../hocs/withAuth'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Button, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { updateUser } from '../actions/user'

// const images = {
//   default: 'https://images.pexels.com/photos/419635/notebook-empty-design-paper-419635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//   lion: 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//   dog: 'https://images.pexels.com/photos/69434/pexels-photo-69434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//   cat: 'https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

// }

const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 2
  },
  avatar: {
    width: 200,
    height: 200,
    border: '3px solid #6796fc',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  display2: {
    fontSize: 24
  }
});

class Profile extends React.Component {

  state = {
    open: false,
    avatar: ''
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (e) => {
    this.setState({
      avatar: e.target.value
    })
  }

  handleSubmit = () => {
    if (this.state.avatar === "") {
      this.handleClose()
    } else {
      this.props.updateAvatar(this.state.avatar)
      this.setState({
        avatar: ''
      })
      this.handleClose()
    }
  }

  componentWillUnmount(){
    this.props.updateUser(this.props.user)
  }

  render(){
    const { classes, user } = this.props
    console.log(this.props)
    return(
      <Grid container  className={classes.container}>

        <Grid item xs={12}>
          <Typography variant="display2" gutterBottom>
            Profile
          </Typography>
        </Grid>
        <Grid container item xs>
          <Grid item xs>
            <Typography variant="headline">
              Username
            </Typography>
            <Typography variant="display2" gutterBottom className={classes.display2}>
              {user.username}
            </Typography>
            <Typography variant="title">
              Name
            </Typography>
            <Typography variant="subheading" gutterBottom>
              {`${user.first_name} ${user.last_name}`}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs direction="column" spacing={16}>
          <Grid item>
            <Avatar src={user.avatar} alt="profile-picture" className={classes.avatar}/>
          </Grid>
          <Grid item>
            <Button onClick={this.handleClickOpen} variant="contained" color="primary">Edit Profile Picture</Button>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="edit-profile-picture"
            >
                <form onSubmit={this.handleSubmit}>
              <DialogTitle id="edit-profile-picture">Edit Profile Picture</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  To change the profile picture, enter the URL for the image below
                </DialogContentText>

                <TextField
                  autoFocus
                  margin="dense"
                  id="profile-picture-url"
                  label="Image URL"
                  type="url"
                  name="avatar"
                  onChange={this.handleChange}
                  value={this.state.avatar}
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={this.handleSubmit} color="primary">
                  Edit
                </Button>
              </DialogActions>
                </form>
            </Dialog>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateAvatar: avatarURL => dispatch({type: 'UPDATE_AVATAR', payload: avatarURL}),
    updateUser: userData => dispatch(updateUser(userData))
  }
}

export default compose(
  withAuth,
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Profile)