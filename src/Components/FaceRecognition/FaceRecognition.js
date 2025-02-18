import React from 'react';
import './FaceRecognition.css';
import { useLocation } from 'react-router-dom';

const FaceRecognition = ({ imageUrl }) => {
  const location = useLocation();
  const box = location.state?.box;



  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        {imageUrl && <img src={imageUrl} id='inputimage' alt='Detected Face' width='500px' height='auto' />}
        {box && (
          <div
            className='bounding-box'
            style={{ top: box.topRow, left: box.leftCol, right: box.rightCol, bottom: box.bottomRow }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default FaceRecognition;