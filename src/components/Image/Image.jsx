import React from "react";
import "./Image.css";
import ReactDOM from "react-dom";
class Image extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }
  //decide the step for rgb colour
  breakStepR = 32;
  breakStepG = 32;
  breakStepB = 32;

  //decide the colour rgb range
  colourRangeR = 256;
  colourRangeG = 256;
  colourRangeB = 256;

  //caculate the rgb colour step
  colorStepR = this.colourRangeR / this.breakStepR;
  colorStepG = this.colourRangeG / this.breakStepG;
  colorStepB = this.colourRangeB / this.breakStepB;

  //decide the generated image size/px
  imageWidth = 256;
  imageHeight = 128;

  //Generate image dataset
  generateValues = () => {
    let imgData = [];

    for (
      let r = this.colorStepR;
      r <= this.colourRangeR;
      r = r + this.colorStepR
    ) {
      for (
        let g = this.colorStepG;
        g <= this.colourRangeG;
        g = g + this.colorStepG
      ) {
        for (
          let b = this.colorStepB;
          b <= this.colourRangeB;
          b = b + this.colorStepB
        ) {
          let colour = [r, g, b];

          imgData.push(colour);
        }
      }
    }
    //console.log(imgData);
    return imgData;
  };

  //Generate canvas according to dataset
  generateCanvas = (imgData) => {
    const can = this.canvasRef.current;
    const ctx = can.getContext("2d");

    //Generate every colour for 1*1 px
    for (
      let index = 0, x = 0, y = 0;
      index < imgData.length, y < this.imageHeight;
      index++
    ) {
      ctx.fillStyle = "rgb(" + imgData[index] + ")";
      ctx.fillRect(x, y, 1, 1);

      x++;
      if (index !== 0 && index % this.imageWidth === 0) {
        x = 0;
        y++;
      }
    }
  };

  componentDidMount() {
    this.generateCanvas(this.generateValues());
  }

  render() {
    const { canvasId } = this.props;
    return (
      <div className="image-layout">
        <canvas
          ref={this.canvasRef}
          id={canvasId}
          width={this.imageWidth}
          height={this.imageHeight}
        >
          This is a canvas image
        </canvas>
      </div>
    );
  }
}

export default Image;
