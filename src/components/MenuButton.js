import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu'
import IconButton from '@material-ui/core/IconButton';
// import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

class MenuButton extends React.Component {
  state = {
    anchorEl: null
  };

  // handleChange = (event, checked) => {
  //   this.setState({ auth: checked });
  // };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    // const { classes } = this.props;
    // const { auth, anchorEl } = this.state;
    const { styling } = this.props
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const Wrapper = this.props.iconType;
    const listItems = this.props.items.map(item =>
      <MenuItem key={item.id} component={Link} to={item.link} onClick={this.handleClose}>{item.name}</MenuItem>
    );
    return (
      <div>
        <IconButton
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
          style={styling}
        >
          {<Wrapper />}
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={this.handleClose}
        >
          {listItems}
        </Menu>
      </div>
    );
  }

}

export default MenuButton;