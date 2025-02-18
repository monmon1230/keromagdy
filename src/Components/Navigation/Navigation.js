import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Link to='/'>
          <p  className='f3 link dim black underline pa3 pointer'>Sign Out</p>
          </Link>
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Link to='/'>
         <p  className='f3 link dim black underline pa3 pointer'>Sign In</p>
         </Link>
         <Link to='/register'>
          <p  className='f3 link dim black underline pa3 pointer'>Register</p>
          </Link>
        </nav>
      );
    }
}

export default Navigation;