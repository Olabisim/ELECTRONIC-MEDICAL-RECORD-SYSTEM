import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import { Staff } from './page/Staff'
import { Student } from './page/Student'

function App() {
        return (
                <Router>
                        <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/staff"  element={<Staff />} />
                                <Route path="/student"  element={<Student />} />
                        </Routes>
                </Router>
        );
}


export default App;
