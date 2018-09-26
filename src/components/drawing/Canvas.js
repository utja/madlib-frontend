import React, { Fragment } from 'react'
import { fabric } from 'fabric'
import { connect } from 'react-redux'
import { compose } from 'redux'
import ColorPicker from './ColorPicker'
import { postDrawing } from '../../actions/drawing'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom'

const styles = {
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
  }
}

class Canvas extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: 'Pencil',
      brushColor: '#000000',
      brushWidth: 1,
      shadowColor: '#000000',
      shadowWidth: 0,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      title: ''
    }
    this.canvas = new fabric.Canvas('c', {
      isDrawingMode: true
    })
  }

  componentDidMount(){
    const canvas = new fabric.Canvas('c', {
      isDrawingMode: true
    })

    this.canvas = canvas

    this.canvas.freeDrawingBrush = new fabric[this.state.value + 'Brush'](this.canvas);
    
    this.canvas.freeDrawingBrush.color = this.state.brushColor;
    this.canvas.freeDrawingBrush.width = this.state.brushWidth;
    this.canvas.freeDrawingBrush.shadow = new fabric.Shadow({
      blur: this.state.shadowWidth,
      offsetX: 0,
      offsetY: 0,
      affectStroke: true,
      color: this.state.shadowColor,
    });
  }

  
  componentDidUpdate(){
    this.canvas.freeDrawingBrush = new fabric[this.state.value + 'Brush'](this.canvas);

    if (this.canvas.freeDrawingBrush) {
      this.canvas.freeDrawingBrush.color = this.state.brushColor;
      this.canvas.freeDrawingBrush.width = this.state.brushWidth;
      this.canvas.freeDrawingBrush.shadow = new fabric.Shadow({
        blur: this.state.shadowWidth,
        offsetX: this.state.shadowOffsetX,
        offsetY: this.state.shadowOffsetY,
        affectStroke: true,
        color: this.state.shadowColor,
      });
    }
  }

  handleClear = (canvas) => {
    canvas.clear()
  }

  handleSubmit = (event, canvas) => {
    event.preventDefault()
    const dataURL = canvas.lowerCanvasEl.toDataURL()
    // this.props.postDrawing: (dataURL, storyID, userID, title)
    this.props.postDrawing(dataURL, this.props.selectedStory.id, this.props.user.id, this.state.title)
    this.props.history.push('/drawings')
  }

  handleChange = event => {
    this.setState({ [event.target.name] : event.target.value });
  };
  
  handleBrushSlide = (event, value) => {
    this.setState({brushWidth: value})
  }

  handleBrushColor = (color, event) => {
    this.setState({brushColor: color.hex})
  }

  handleShadowWidthSlide = (event, value) => {
    this.setState({shadowWidth: value})
  }

  handleShadowColor = (color, event) => {
    this.setState({shadowColor: color.hex})
  }

  handleShadowOffsetXSlide = (event, value) => {
    this.setState({shadowOffsetX: value})
  }

  handleShadowOffsetYSlide = (event, value) => {
    this.setState({shadowOffsetY: value})
  }



  render(){
    const { classes } = this.props
    console.log(this.props)
      return(
        <Fragment>
          <Grid item className="canvas">
              <canvas id="c" width="400" height="400">                    
              </canvas>
              <TextField
                id="outlined-helperText"
                name="title"
                margin="normal"
                variant="outlined"
                label="title"
                className={classes.textField}
                onChange={this.handleChange}
                required />
              <Button onClick={(event) => this.handleSubmit(event, this.canvas)} className={this.props.classes.button} size="small" color="primary" variant="contained">
                Submit
              </Button>
          </Grid>
          <Grid item>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Mode</FormLabel>
              <RadioGroup
                aria-label="canvas-control"
                name="value"
                className={classes.group}
                value={this.state.value}
                onChange={this.handleChange}
              >
                <FormControlLabel
                  value="Pencil"
                  control={<Radio color="primary" />}
                  label="Pencil"
                  labelPlacement="end"
                />
              </RadioGroup>
              <ColorPicker label={'Pick Brush Color'}color={this.state.brushColor} handleColor={this.handleBrushColor} />
              <Typography  id="brush-width">Brush Width: {this.state.brushWidth}</Typography>
              <Slider min={1} max={100} name="brushWidth" value={this.state.brushWidth} aria-labelledby="brush-width" onChange={this.handleBrushSlide} />
              <Typography id="shadow-width">Shadow Width: {this.state.shadowWidth}</Typography>
              <Slider min={1} max={100} name="shadowWidth" value={this.state.shadowWidth} aria-labelledby="shadow-width" onChange={this.handleShadowWidthSlide} />
              <ColorPicker label={'Pick Shadow Color'} color={this.state.shadowColor} handleColor={this.handleShadowColor} />
              <Typography id="shadow-offset-x">Shadow Offset X: {this.state.shadowOffsetX}</Typography>
              <Slider min={-50} max={50} name="shadowOffsetX" value={this.state.shadowOffsetX} aria-labelledby="shadow-offset-x" onChange={this.handleShadowOffsetXSlide} />
              <Typography id="shadow-offset-y">Shadow Offset Y: {this.state.shadowOffsetY}</Typography>
              <Slider min={-50} max={50} name="shadowOffsetY" value={this.state.shadowOffsetY} aria-labelledby="shadow-offset-y" onChange={this.handleShadowOffsetYSlide} />
              <Button onClick={() => this.handleClear(this.canvas)} id="clear-canvas" className={this.props.classes.button} size="small" color="primary" variant="contained">
                    Clear
              </Button>
            </FormControl>
          </Grid>
        </Fragment>
      )
  }
}

const mapStateToProps = state => {
  return {
    selectedStory: state.stories.selectedStory,
    user: state.user.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    postDrawing: (dataURL, storyID, userID, title) => dispatch(postDrawing(dataURL, storyID, userID, title))
  }
}

// export default compose(
//   withStyles(styles),
//   connect(mapStateToProps, mapDispatchToProps)
//   )(Canvas)
export default compose(
  withStyles(styles),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
  )(Canvas)