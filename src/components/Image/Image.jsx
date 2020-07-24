import React from "react";
import "./Image.css";

class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  //Initialize the image dataset
  imgData = [];

  generateValues = () => {
    const {
      colorRangeR,
      colorStepR,
      colorRangeG,
      colorStepG,
      colorRangeB,
      colorStepB,
    } = this.props;

    for (let r = colorStepR; r <= colorRangeR; r = r + colorStepR) {
      for (let g = colorStepG; g <= colorRangeG; g = g + colorStepG) {
        for (let b = colorStepB; b <= colorRangeB; b = b + colorStepB) {
          let colour = [r, g, b];
          //add every data to array
          this.imgData.push(colour);
        }
      }
    }
  };

  generateCanvas = () => {
    const { canvasId, width, height } = this.props;
    const can = document.getElementById(canvasId);
    const ctx = can.getContext("2d");

    //Generate every colour for 1*1 px
    for (
      let index = 0, x = 0, y = 0;
      index < this.imgData.length, y < height;
      index++
    ) {
      ctx.fillStyle = "rgb(" + this.imgData[index] + ")";
      ctx.fillRect(x, y, 1, 1);

      x++;
      if (index != 0 && index % width === 0) {
        x = 0;
        y++;
      }
    }
  };

  componentDidMount() {
    this.generateValues();
    this.generateCanvas();
  }

  render() {
    const { canvasId, width, height } = this.props;
    return (
      <div className="image-layout">
        <canvas id={canvasId} width={width} height={height}></canvas>
      </div>
    );
  }
}

export default Image;
