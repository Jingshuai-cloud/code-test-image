import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      img: new Image(),
    };
  }

  componentDidMount() {
    var imgData = [];
    for (var i = 8; i <= 256; i = i + 8) {
      for (var j = 8; j <= 256; j = j + 8) {
        for (var k = 8; k <= 256; k = k + 8) {
          // var data = "(" + i + "," + j + "," + k + ")";
          var data = [i, j, k];
          imgData.push(data);
        }
      }
    }
    //console.log(imgData);

    // var imgData = [
    //     [0, 0, 0],
    //     [128, 8, 16],
    //     [256, 8, 24],
    //     [8, 8, 32],
    //     [128, 8, 40],
    //     [256, 8, 48],
    //     [8, 8, 56],
    //     [256, 8, 64],
    //   ],
    //   img = document.createElement("div"),
    //   i = 0,
    //   l = imgData.length;
    // var pixel;
    // img.style.cssText = " width:256px; height:128px";
    // while (i < l) {
    //   pixel = document.createElement("div");
    //   pixel.style.cssText =
    //     "float:left; width:10px; height:10px; background-color: rgb(" +
    //     imgData[i].toString() +
    //     ")";
    //   //console.log(imgData[i]);
    //   img.appendChild(pixel);
    //   i += 1;
    // }
    // document.body.appendChild(img);

    var can = document.getElementById("canvas");
    var ctx = can.getContext("2d");
    var k = 0;
    console.log(imgData.length);
    while (k < imgData.length) {
      for (var i = 0; i < 256; i++) {
        for (var j = 0; j < 128; j++) {
          ctx.fillStyle = "rgb(" + imgData[k] + ")";
          //console.log(ctx.fillStyle);
          ctx.fillRect(i, j, 1, 1);
          k += 1;
        }
      }
    }

    // var imgPath = ctx.toDataURL("image/png");

    // var image = new Image();
    // image.src = can.toDataURL("image/png");
    // document.body.appendChild(image);
    // // this.setState({ img: image });
    // // console.log(this.state.img);
  }

  handleDownloadImage = (e) => {
    e.preventDefault();
    var link = document.createElement("a");
    link.download = "filename.png";
    link.href = document.getElementById("canvas").toDataURL("image/png");
    link.click();
  };

  render() {
    return (
      <div>
        app
        <div>
          <canvas id="canvas" width="256" height="128"></canvas>
          <button onClick={this.handleDownloadImage}>Download the image</button>
        </div>
      </div>
    );
  }
}

export default App;
