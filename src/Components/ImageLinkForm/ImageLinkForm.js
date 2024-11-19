import React from "react";
import "../ImageLinkForm/ImageLinkForm.css";



const ImageLinkForm = ({onInputchange,onButtonsubmit}) => {
  return (
    <div>
      <p className="f3 center white">
        {"this magic brain will detect faces in your picture. Get it a try"}
      </p>

      <div className="center">
        <div className="form center pa2 br3 shadow-5">
          <input className="f4 pa2 w-70 center " type="tex" onChange={onInputchange}  />
          <button className=" w-30 grow f4  link ph-3 pv2 dib white bg-light-purple" onClick={onButtonsubmit}>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
