//import React from 'react';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import About from '../components/About/About';
import Doc from '../pages/Doctors/Doc';
import DoctorDetails from '../pages/Doctors/DoctorDetails';
import Feedback from '../pages/Doctors/Feedback';
import {Routes, Route} from 'react-router-dom';
import MyAccount from '../Dashboard/user-account/MyAccount';
import Dashboard from '../Dashboard/doctor-account/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import Donate from '../pages/Donate';
import Profile from '../pages/Profile';


const Routers = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/doc" element={<Doc/>}/>
            <Route path="/feedback" element={<Feedback/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Signup/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/donate" element={<Donate/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/users/profile/me" element= {<ProtectedRoute allowedRoles={['patient']}>
            <MyAccount/></ProtectedRoute> }/>
             <Route path="/doctors/profile/me" element= {<ProtectedRoute allowedRoles={['doctor']}>
            <Dashboard/></ProtectedRoute>}/>
        </Routes>
    );
};

export default Routers;