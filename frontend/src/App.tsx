import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import { Staff } from './page/Staff'
import { Login } from './page/Login'
import { Student } from './page/Student'
import { Form1 } from './components/students/Form1'
import { Form2 } from './components/students/Form2'
import { Form4 } from './components/students/Form4'
import { HistoryForm } from './components/students/HistoryForm'
import { Measurement } from './components/students/Measurement'
import { LoginStudent } from './components/students/LoginStudent'
import { Stats } from './page/Stats';
import { StudentRegister } from './page/StudentRegister';


function App() {
        return (
                <Router>
                        <Routes>
                                
                                <Route path="/"  element={<Login />} />
                                <Route path="/home" element={<Stats />} />
                                {/* <Route path="/student/home" element={<Home />} /> */}
                                <Route path="/student/login" element={<Login />} />
                                <Route path="/student/fresh" element={<LoginStudent />} />
                                <Route path="/student/register" element={<StudentRegister />} />
                                <Route path="/staff"  element={<Staff />} />
                                <Route path="/student"  element={<Student />} />
                                <Route path="/student/first"  element={<Form1 />} />
                                <Route path="/student/second"  element={<Form2 />} />
                                <Route path="/student/fourth"  element={<Form4 />} />
                                <Route path="/student/fifth"  element={<HistoryForm />} />
                                {/* to be done by the admin */}
                                <Route path="/student/sixth"  element={<Measurement />} />
                                
                        </Routes>
                </Router>
        );
}


export default App;
