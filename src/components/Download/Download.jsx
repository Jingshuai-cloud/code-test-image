import React from "react";
import "./Download.css";

function Download(props) {
  let imageHref = "";

  //Generate Image accordingly
  const generateImage = () => {
    imageHref = document.getElementById(props.canvasId).toDataURL("image/png");
  };

  //Dolownload image
  const downloadImage = () => {
    const link = document.createElement("a");
    link.download = "Image.png";
    link.href = imageHref;
    link.click();
  };

  //click the button
  const handleOnClick = () => {
    generateImage();
    downloadImage();
  };

  return (
    <div className="button-layout">
      <button onClick={handleOnClick}>Download</button>
    </div>
  );
}

export default Download;
