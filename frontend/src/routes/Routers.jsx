import React from 'react'
import Home from '../pages/Home';
import Login from '../pages/Login';
import signUp from '../pages/SignUp';
import Service from '../pages/Service';
import Doctors from '../pages/Doctors/Doctors';
import DoctorsDetails from '../pages/Doctors/DoctorDetails';
import Contact from "../pages/Contact"
import MyAccount from '../Dashboard/User-account/MyAccount';

import { Routes , Route } from "react-router-dom";
import SignUp from '../pages/SignUp';
import Dashboard from '../Dashboard/Doctor-account/Dashboard';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/doctors' element={<Doctors/>}/>
      <Route path='/doctors/:id' element={<DoctorsDetails/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<SignUp/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/users/profile/me' element={<MyAccount/>}/>
      <Route path='/doctors/profile/me' element={<Dashboard/>}/>
 
      
    </Routes>
  )
}

export default Routers