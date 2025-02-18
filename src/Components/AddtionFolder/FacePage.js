import React, { useState } from 'react';
import Logo from '../Logo/Logo.js';
import Navigation from '../Navigation/Navigation.js';
import Rank from '../Rank/Rank.js';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm.js';
import FaceRecognition from '../FaceRecognition/FaceRecognition.js';

const FacePage = ({ entries, name }) => {
  const [image,setImage]=useState()
  const [entryCount, setEntryCount] = useState('');




  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1rem' }}>
        <Logo />
        <Navigation />
      </div>
      <Rank name={name} count={entryCount} />
      <ImageLinkForm i  onInputChange={setImage}/>
      <FaceRecognition imageUrl={image}/>
    </div>
  );
}

export default FacePage;
