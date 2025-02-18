
import React from 'react';



const Rank = ({  name,count} ) => {



  

  
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <div className='white f3'>
        {`${name}, your current entry count is...`}
      </div>
      <div className='yellow f1'>
        {count}
      </div>
    </div>
  );
}

export default Rank;