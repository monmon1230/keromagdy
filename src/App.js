import React, { useState } from 'react';
// import ParticlesBg from 'particles-bg';

import axios from 'axios'; // إضافة مكتبة axios للتعامل مع الطلبات
import './App.css';
import FacePage from './Components/AddtionFolder/FacePage.js';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import ParticlesBg from 'particles-bg';
import Register from './Components/Rigster/register.js';
import SignIn from './Components/Signin/Signin.js';








const App = () => {
  // استخدام useState لإدارة الحالة
 
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  });

  // تحميل بيانات المستخدم
  const loadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    });
  };




 // facebox


 
  return (

  <BrowserRouter>
    <div>
    <ParticlesBg type="fountain" bg={true} />
      <Routes>
   
        <Route path='/facepage' element={<FacePage name={user.name}
             entries={user.entries} />}/>
        <Route path='/' element={<SignIn loadUser={loadUser}/>}/>
        <Route path='/register' element={<Register loadUser={loadUser} user={user}/>}/>
     
     
      </Routes>
      </div>
      </BrowserRouter>
  );

}

export default App;