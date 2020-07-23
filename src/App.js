import React from "react";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    //Generate all the require values
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

    //Draw the indicated canvas
    var can = document.getElementById("canvas");
    var ctx = can.getContext("2d");

    for (var k = 0, x = 0, y = 0; k < imgData.length, y < 128; k++) {
      ctx.fillStyle = "rgb(" + imgData[k] + ")";
      //console.log(ctx.fillStyle);
      ctx.fillRect(x, y, 1, 1);

      x++;
      if (k != 0 && k % 256 === 0) {
        x = 0;
        y++;
      }
    }
  }

  //convert canvas to image and download the image
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
