import React from "react";
import "./App.css";
import Title from "./components/Title/Title";
import Image from "./components/Image/Image";
import Download from "./components/Download/Download";

class App extends React.Component {
  //decide the cavas ID
  canvasId = "canvas";

  render() {
    return (
      <div className="content-layout">
        <Title />
        <Image canvasId={this.canvasId} />
        <Download canvasId={this.canvasId} />
      </div>
    );
  }
}

export default App;
