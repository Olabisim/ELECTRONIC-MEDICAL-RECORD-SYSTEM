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
                                <Route path="/admin/student"  element={<StudentHome />} />
                                <Route path="/home" element={<Stats />} />
                                {/* <Route path="/student/home" element={<Home />} /> */}
                                <Route path="/student/login" element={<Login />} />
                                <Route path="/student/register" element={<StudentRegister />} />
                                <Route path="/staff"  element={<Staff />} />
                                <Route path="/student"  element={<Student />} />
                                
                        </Routes>
                </Router>
        );
}


export default App;
