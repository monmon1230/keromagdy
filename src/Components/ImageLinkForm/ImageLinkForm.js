import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const ImageLinkForm = ({onInputChange} ) => {
  const [imageurl, setImageurl] = useState(true);
  const navigate = useNavigate();



  const calculateFaceLocation = (data) => {
    const clarifaiFace = data?.outputs?.[0]?.data?.regions?.[0]?.region_info?.bounding_box;
    if (!clarifaiFace) return null;
    const image = document.getElementById('inputimage');
    if (!image) return null;
    const width = image.width || 0;
    const height = image.height || 0;
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    };
  };



  const onButtonSubmit = async () => {
    onInputChange(imageurl)
 
    if (!imageurl || !imageurl.startsWith('http')) {
      alert('Please enter a valid image URL');
      return;
    }
      const response = await axios.post('http://localhost:3005/image', { input: imageurl });
      console.log(response.data)
      const box = calculateFaceLocation(response.data);
      if (box) navigate('/facepage', { state: { box } });
      console.log({box})
        }



 
  return (
    <div>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='text' onChange={(e)=>setImageurl(e.target.value)} placeholder='Enter image URL' />
          <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
