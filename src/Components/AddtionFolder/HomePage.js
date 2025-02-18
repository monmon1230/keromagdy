import React from 'react'
import Logo from '../Logo/Logo.js'
import Navigation from '../Navigation/Navigation.js'
import Signin from '../Signin/Signin.js'

const HomePage = () => {
  return (
    <div > 
    <div style={{display:'flex',justifyContent:'space-between',paddingTop:'2rem'}}>
    <Logo/>
    <Navigation/>
    </div>
    <Signin/>
    
    </div>
  )
}

export default HomePage;