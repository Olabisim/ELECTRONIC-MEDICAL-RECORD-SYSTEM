import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import { Staff } from './page/staff/Staff'
import { Login } from './page/Login'
import { Student } from './page/student/Student'
import { Stats } from './page/admin/Stats';
import { StudentRegister } from './page/student/StudentRegister';
import { Admin } from './page/admin/Home';
import { AdminStudent } from './page/admin/Student';
import { DefaultLogin } from './components/DefaultLogin';


// DOCTOR 

import { DoctorHome } from './page/doctor/Home';
import { DoctorStudent } from './page/doctor/DoctorStudent';
import { DoctorStudentView } from './page/doctor/DoctorStudentView';



// ATTENDEE

import { AttendeeHome } from './page/attendee/Home';



// NURSE

import { NurseHome } from './page/nurse/Home'
import { NurseStudent } from './page/nurse/NurseStudent'
import { NurseStudentForm } from './page/nurse/NurseStudentForm'
import { NurseHistory } from './page/nurse/NurseHistory'

function App() {
        return (
                <Router>
                        <Routes>


                                
                                <Route path="/"  element={<Login />} />
                                <Route path="/home" element={<Home />} />
                                
                                {/* ADMIN */}

                                <Route path="/admin" element={<Admin />} /> 
                                <Route path="/admin/login" element={<DefaultLogin />} /> 
                                <Route path="/admin/staff" element={<Stats />} /> 
                                <Route path="/admin/student" element={<AdminStudent />} /> 
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
                                <Route path="/attendee" element={<AttendeeHome />} /> 

                                {/* DOCTOR */}

                                <Route path="/doctor/login" element={<DefaultLogin />} /> 
                                <Route path="/doctor" element={<DoctorHome />} /> 
                                <Route path="/doctor/students" element={<DoctorStudent />} /> 
                                <Route path="/doctor/students/view" element={<DoctorStudentView />} /> 

                                {/* NURSE */}
                                
                                <Route path="/nurse/login" element={<DefaultLogin />} /> 
                                <Route path="/nurse" element={<NurseHome />} /> 
                                <Route path="/nurse/history" element={<NurseHistory />} /> 
                                <Route path="/nurse/student" element={<NurseStudent />} /> 
                                <Route path="/nurse/student/form" element={<NurseStudentForm />} /> 

                                {/* MEDICAL_ASS */}

                                <Route path="/medical/login" element={<DefaultLogin />} /> 
                                <Route path="/medical" element={<Stats />} /> 

                                
                        </Routes>
                </Router>
        );
}


export default App;
