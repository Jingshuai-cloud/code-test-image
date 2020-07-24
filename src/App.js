import React from "react";
import "./App.css";
import Title from "./components/Title/Title";
import Image from "./components/Image/Image";
import Download from "./components/Download/Download";

class App extends React.Component {
  //decide the cavas ID
  canvasId = "canvas";

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

  render() {
    return (
      <div className="content-layout">
        <Title />
        <Image
          canvasId={this.canvasId}
          width={this.imageWidth}
          height={this.imageHeight}
          colorRangeR={this.colourRangeR}
          colorRangeG={this.colourRangeG}
          colorRangeB={this.colourRangeB}
          colorStepR={this.colorStepR}
          colorStepG={this.colorStepG}
          colorStepB={this.colorStepB}
        />
        <Download
          onClickDownload={this.handleOnClick}
          canvasId={this.canvasId}
        />
      </div>
    );
  }
}

export default App;
