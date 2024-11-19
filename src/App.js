import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Logo from "./Components/Logo/Logo";
import Navigation from "./Components/Navigation/Navigation";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";
import Rank from "./Components/Rank/Rank";
import React, { useEffect, useState } from "react";
import ParticlesBg from "particles-bg";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "d9e11948ea514db582448a27dbcfa98d",
});

const App = () => {
  const [inputs, setinputs] = useState({
    input: "",
    imageUrl: "",
    box: {},
  });

  const calculateFaceLocation = (data) => {
   const ClarifaiFace= data.outputs[0].data.regions[0].region_info.bounding_box
   const image= document.getElementById('inputimage')
  };
  const onInputchange = (e) => {
    setinputs(prevState => ({
      ...prevState,
      input: e.target.value,
    }));
  };
  useEffect(() => {
    if (inputs.input){  onButtonsubmit();}
  
  }, [inputs.input]);
  const onButtonsubmit = () => {
    setinputs({imageUrl:inputs.input})
    console.log("hellow every:", inputs.imageUrl);
    app.models
    .predict(Clarifai.FACE_DETECT_MODEL, inputs.imageUrl) // استخدم `inputs.input` بدلاً من `inputs.imageUrl`
    .then(response => {
      console.log('hiiiiiii', calculateFaceLocation(response));
    })
    .catch(err => {
      console.log('stooooop', err);
    });
};
  

  return (
    <div>
      <ParticlesBg type="tadpole" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputchange={onInputchange}
        onButtonsubmit={onButtonsubmit}
      />
    <FaceRecognition imageUrl={inputs.imageUrl || ''} /> 
    </div>
  );
};

export default App;
