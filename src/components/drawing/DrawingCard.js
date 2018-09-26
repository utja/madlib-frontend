import React from 'react'
import { connect } from 'react-redux'

class DrawingCard extends React.Component {


  componentDidMount(){
    const myCanvas = document.getElementById(`drawing-${this.props.drawing.id}`);
    console.log(myCanvas)
    const ctx = myCanvas.getContext('2d');
    const img = new Image;
    img.onload = function(){
      ctx.drawImage(img,0,0); // Or at whatever offset you like
    };
    img.src = this.props.drawing.data_url;
  }

  componentDidUpdate(){
    const myCanvas = document.getElementById(`drawing-${this.props.drawing.id}`);
    console.log(myCanvas)
    const ctx = myCanvas.getContext('2d');
    ctx.clearRect(0,0,400,400)
    const img = new Image;
    img.onload = function(){
      ctx.drawImage(img,0,0); // Or at whatever offset you like
    };
    img.src = this.props.drawing.data_url;
  }

  render(){
    console.log(this.props)
    
    return(
      <div>
        <h1>{this.props.drawing.title}</h1>
        <canvas width="400" height="400" id={`drawing-${this.props.drawing.id}`}></canvas>
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