import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import { Staff } from './page/Staff'
import { Student } from './page/Student'
import { Form1 } from './components/students/Form1'
import { Form2 } from './components/students/Form2'
import { Form3 } from './components/students/Form3'
import { Form4 } from './components/students/Form4'
import { HistoryForm } from './components/students/HistoryForm'
import { Measurement } from './components/students/Measurement'


function App() {
        return (
                <Router>
                        <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/staff"  element={<Staff />} />
                                <Route path="/student"  element={<Student />} />
                                <Route path="/student/first"  element={<Form1 />} />
                                <Route path="/student/second"  element={<Form2 />} />
                                <Route path="/student/third"  element={<Form3 />} />
                                <Route path="/student/fourth"  element={<Form4 />} />
                                <Route path="/student/fifth"  element={<HistoryForm />} />
                                <Route path="/student/sixth"  element={<Measurement />} />
                        </Routes>
                </Router>
        );
}


export default App;
