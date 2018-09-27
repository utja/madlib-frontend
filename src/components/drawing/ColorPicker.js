import React from 'react'
import { CompactPicker } from 'react-color'
import Button from '@material-ui/core/Button'

class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color, event) => {
    this.props.handleColor(color, event)
    this.handleClose()
  }

  render() {
    const popover = {
      position: 'absolute',
      zIndex: '2',
    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }
    
    function padZero(str, len) {
      len = len || 2;
      var zeros = new Array(len).join('0');
      return (zeros + str).slice(-len);
    }

    function invertColor(hex, bw) {
      if (hex.indexOf('#') === 0) {
          hex = hex.slice(1);
      }
      // convert 3-digit hex to 6-digits.
      if (hex.length === 3) {
          hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      if (hex.length !== 6) {
          throw new Error('Invalid HEX color.');
      }
      var r = parseInt(hex.slice(0, 2), 16),
          g = parseInt(hex.slice(2, 4), 16),
          b = parseInt(hex.slice(4, 6), 16);
      if (bw) {
          // http://stackoverflow.com/a/3943023/112731
          return (r * 0.299 + g * 0.587 + b * 0.114) > 186
              ? '#000000'
              : '#FFFFFF';
      }
      // invert color components
      r = (255 - r).toString(16);
      g = (255 - g).toString(16);
      b = (255 - b).toString(16);
      // pad each with zeros and return
      return "#" + padZero(r) + padZero(g) + padZero(b);
    }

    const styles = {
      div: {
        zIndex: 3
      },
      button: {
        color: invertColor(this.props.color, true),
        backgroundColor: this.props.color
      },
    }

    return (
      <div style={styles.div}>
        <Button size="small" style={styles.button} variant="contained" onClick={ this.handleClick }>{this.props.label}</Button>
        { this.state.displayColorPicker ? <div style={ popover }>
          <div style={ cover } onClick={ this.handleClose }/>
          <CompactPicker color={this.props.color} onChange={this.handleChange}/>
        </div> : null }
      </div>
    )
  }
}

export default ColorPicker