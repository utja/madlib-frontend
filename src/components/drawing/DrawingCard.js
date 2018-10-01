import React from 'react'
import { connect } from 'react-redux'

class DrawingCard extends React.Component {

  //TODO change to image instead of canvas
  //##############################
  componentDidMount(){
    const myCanvas = document.getElementById(`drawing-${this.props.drawing.id}`);
    const ctx = myCanvas.getContext('2d');
    const img = new Image();
    img.onload = function(){
      ctx.drawImage(img,0,0); // Or at whatever offset you like
    };
    img.src = this.props.drawing.data_url;
  }

  componentDidUpdate(){
    const myCanvas = document.getElementById(`drawing-${this.props.drawing.id}`);
    const ctx = myCanvas.getContext('2d');
    ctx.clearRect(0,0,450,450)
    const img = new Image();
    img.onload = function(){
      ctx.drawImage(img,0,0); // Or at whatever offset you like
    };
    img.src = this.props.drawing.data_url;
  }

  render(){
    
    return(
      <div>
        <h1 className="cursive">{this.props.drawing.title}</h1>
        <canvas width="450" height="450" id={`drawing-${this.props.drawing.id}`}></canvas>
      </div>

    )
  }

}

const mapStateToProps = state => {
  return {
    drawing: state.drawings.selectedDrawing
  }
}
export default connect(mapStateToProps)(DrawingCard)