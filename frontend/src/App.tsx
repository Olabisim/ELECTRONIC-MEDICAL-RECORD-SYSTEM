import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import { Staff } from './page/staff/Staff'
import { Login } from './page/Login'
import { Student } from './page/student/Student'
import { Stats } from './page/Stats';
import { StudentRegister } from './page/student/StudentRegister';
import { StudentHome } from './page/admin/Home';
import { DefaultLogin } from './components/DefaultLogin';

function App() {
        return (
                <Router>
                        <Routes>


                                
                                <Route path="/"  element={<Login />} />
                                <Route path="/home" element={<Home />} />
                                
                                {/* ADMIN */}

                                <Route path="/admin" element={<Stats />} /> 
                                <Route path="/admin/login" element={<DefaultLogin />} /> 
                                <Route path="/admin/staff" element={<Stats />} /> 
                                <Route path="/admin/student" element={<StudentHome />} /> 
                                <Route path="/admin/attendee" element={<Stats />} /> 
                                <Route path="/admin/doctor" element={<Stats />} /> 
                                <Route path="/admin/nurse" element={<Stats />} /> 
                                <Route path="/admin/medical_ass" element={<Stats />} /> 

                                {/* STAFF */}

                                <Route path="/staff/login" element={<Login />} /> 
                                <Route path="/staff/register" element={<Stats />} /> 
                                <Route path="/staff" element={<Staff />} /> 

                                {/* STUDENT */}

                                <Route path="/student/login" element={<Login />} /> 
                                <Route path="/student/register" element={<StudentRegister />} /> 
                                <Route path="/student" element={<Student />} /> 
                                <Route path="/student/home" element={<Home />} />

                                {/* ATTENDEE */}
                                
                                <Route path="/attendee/login" element={<DefaultLogin />} /> 
                                <Route path="/attendee" element={<Stats />} /> 

                                {/* DOCTOR */}

                                <Route path="/doctor/login" element={<DefaultLogin />} /> 
                                <Route path="/doctor" element={<Stats />} /> 

                                {/* NURSE */}
                                
                                <Route path="/nurse/login" element={<DefaultLogin />} /> 
                                <Route path="/nurse" element={<Stats />} /> 

                                {/* MEDICAL_ASS */}

                                <Route path="/medicalass/login" element={<DefaultLogin />} /> 
                                <Route path="/medicalass" element={<Stats />} /> 

                                
                        </Routes>
                </Router>
        );
}


export default App;
