import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import { Staff } from './page/Staff'
import { Login } from './page/Login'
import { Student } from './page/Student'
import { Stats } from './page/Stats';
import { StudentRegister } from './page/StudentRegister';
import { StudentHome } from './page/student/Home';


function App() {
        return (
                <Router>
                        <Routes>


                                
                                <Route path="/"  element={<Login />} />
                                
                                {/* ADMIN */}

                                <Route path="/admin" element={<Stats />} /> 
                                <Route path="/admin/login" element={<Stats />} /> 
                                <Route path="/admin/staff" element={<Stats />} /> 
                                <Route path="/admin/student" element={<StudentHome />} /> 
                                <Route path="/admin/attendee" element={<Stats />} /> 
                                <Route path="/admin/doctor" element={<Stats />} /> 
                                <Route path="/admin/nurse" element={<Stats />} /> 
                                <Route path="/admin/medical_ass" element={<Stats />} /> 

                                {/* STAFF */}

                                <Route path="/staff/login" element={<Stats />} /> 
                                <Route path="/staff/register" element={<Stats />} /> 
                                <Route path="/staff" element={<Staff />} /> 

                                {/* STUDENT */}

                                <Route path="/student/login" element={<Login />} /> 
                                <Route path="/student/register" element={<StudentRegister />} /> 
                                <Route path="/student" element={<Student />} /> 
                                <Route path="/student/home" element={<Home />} />

                                {/* ATTENDEE */}
                                
                                <Route path="/attendee/login" element={<Stats />} /> 
                                <Route path="/attendee" element={<Stats />} /> 

                                {/* DOCTOR */}

                                <Route path="/doctor/login" element={<Stats />} /> 
                                <Route path="/doctor" element={<Stats />} /> 

                                {/* NURSE */}
                                
                                <Route path="/nurse/login" element={<Stats />} /> 
                                <Route path="/nurse" element={<Stats />} /> 

                                {/* MEDICAL_ASS */}

                                <Route path="/medicalass/login" element={<Stats />} /> 
                                <Route path="/medicalass" element={<Stats />} /> 

                                <Route path="/student/home" element={<Home />} />
                                
                        </Routes>
                </Router>
        );
}


export default App;
