import React, { Fragment } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { fabric } from 'fabric'
import { withRouter } from 'react-router-dom'
import ColorPicker from './ColorPicker'
import { postDrawing } from '../../actions/drawing'
import { withStyles } from '@material-ui/core/styles';
import { Button, FormControl, Grid, TextField, Typography } from '@material-ui/core'
import Slider from '@material-ui/lab/Slider';

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
      // value is pencil for fabric js, but display as brush on app
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
    this.props.postDrawing(dataURL, this.props.selectedStory.id, this.props.user.id, this.state.title)
    //TODO ##################################
    // push to stories/# so user can see other drawings for that one story
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

  handleBrushReset = () => {
    this.setState({
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      shadowWidth: 0
    })
  }



  render(){
    const { classes } = this.props
    return(
      <Fragment>
        <Grid item xs={4} className="canvas">
            <canvas id="c" width="450" height="450">                    
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
            {this.state.title === "" ? 
              <Button disabled className={this.props.classes.button} size="small" color="primary" variant="contained">
                Submit
              </Button>
            :
              <Button onClick={(event) => this.handleSubmit(event, this.canvas)} className={this.props.classes.button} size="small" color="primary" variant="contained">
                Submit
              </Button>
            }
        </Grid>
        <Grid item xs={3}>
          <FormControl component="fieldset" className={classes.formControl}>
            <ColorPicker label={'Pick Brush Color'}color={this.state.brushColor} handleColor={this.handleBrushColor} />
            <Typography  id="brush-width">Brush Width: {Math.round(this.state.brushWidth)}</Typography>
            <Slider min={1} max={100} name="brushWidth" value={this.state.brushWidth} aria-labelledby="brush-width" onChange={this.handleBrushSlide} />
            <Typography id="shadow-width">Shadow Width: {Math.round(this.state.shadowWidth)}</Typography>
            <Slider min={0} max={100} name="shadowWidth" value={this.state.shadowWidth} aria-labelledby="shadow-width" onChange={this.handleShadowWidthSlide} />
            <ColorPicker label={'Pick Shadow Color'} color={this.state.shadowColor} handleColor={this.handleShadowColor} />
            <Typography id="shadow-offset-x">Shadow Offset X: {Math.round(this.state.shadowOffsetX)}</Typography>
            <Slider min={-50} max={50} name="shadowOffsetX" value={this.state.shadowOffsetX} aria-labelledby="shadow-offset-x" onChange={this.handleShadowOffsetXSlide} />
            <Typography id="shadow-offset-y">Shadow Offset Y: {Math.round(this.state.shadowOffsetY)}</Typography>
            <Slider min={-50} max={50} name="shadowOffsetY" value={this.state.shadowOffsetY} aria-labelledby="shadow-offset-y" onChange={this.handleShadowOffsetYSlide} />
            <Button onClick={this.handleBrushReset} className={this.props.classes.button} size="small" color="primary" variant="contained">
              Reset Shadow Brush and Offsets
            </Button>
            <Button onClick={() => this.handleClear(this.canvas)} id="clear-canvas" className={this.props.classes.button} size="small" color="primary" variant="contained">
              Clear Canvas
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

export default compose(
  withStyles(styles),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
  )(Canvas)