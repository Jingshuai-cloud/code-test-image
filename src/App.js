import React from "react";
import "./App.css";

class App extends React.Component {
  //Initialize the image data
  imgData = [];

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

  //Generate Image values
  generateValues = () => {
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
          //add every data to array
          this.imgData.push(colour);
        }
      }
    }
  };

  //Generate canvas according to the values
  generateCanvas = () => {
    const can = document.getElementById("canvas");
    const ctx = can.getContext("2d");

    //Generate every colour for 1*1 px
    for (
      let index = 0, x = 0, y = 0;
      index < this.imgData.length, y < this.imageHeight;
      index++
    ) {
      ctx.fillStyle = "rgb(" + this.imgData[index] + ")";
      ctx.fillRect(x, y, 1, 1);

      x++;
      if (index != 0 && index % this.imageWidth === 0) {
        x = 0;
        y++;
      }
    }
  };

  //Generate image according to the canvas
  generateImageAndDownload = () => {
    const link = document.createElement("a");
    link.download = "Image.png";
    link.href = document.getElementById("canvas").toDataURL("image/png");
    link.click();
  };

  //Click the button, generate and download image
  handleOnClick = (e) => {
    e.preventDefault();
    this.generateImageAndDownload();
  };

  //Load the canvas first
  componentDidMount() {
    this.generateValues();

    this.generateCanvas();
  }

  render() {
    return (
      <div className="content-layout">
        <h1>Download Image</h1>
        <div className="image-layout">
          <canvas id="canvas" width="256" height="128"></canvas>
        </div>
        <div className="button-layout">
          <button onClick={this.handleOnClick}>Download</button>
        </div>
      </div>
    );
  }
}

export default App;
