import React from "react";
import '../css/stats.css';
import { Link } from "react-router-dom";

export const Stats = () => {
        return (
                <div className="stats parent">
                        {/* <div>
                                <img src="../../STATS.svg" alt="" />
                        </div> */}
                        <div className="stats parent_inner"> 
                                <div className="stats card">

                                        <h2>STUDENTS </h2>
                                        <h1>123</h1>
                                        <button className="stats button">
                                                <Link to="/admin/student">
                                                        view
                                                </Link>
                                        </button>
                                </div>
                                <div className="stats card">

                                        <h2>STAFFS </h2>
                                        <h1>1234</h1>
                                        <button className="stats button">view</button>
                                </div>

                                <div className="stats card">

                                        <h2>ATTENDEE </h2>
                                        <h1>2</h1>
                                        <button className="stats button">view</button>
                                </div>
                        </div>

                        
                        <div className="stats parent_inner"> 
                                <div className="stats card">

                                        <h2>DOCTORS </h2>
                                        <h1>2</h1>
                                        <button className="stats button">
                                                <Link to="/admin/student">
                                                        view
                                                </Link>
                                        </button>
                                </div>
                                <div className="stats card">

                                        <h2>NURSE </h2>
                                        <h1>2</h1>
                                        <button className="stats button">view</button>
                                </div>
                                <div className="stats card">

                                        <h2>MEDICAL_ASS </h2>
                                        <h1>2</h1>
                                        <button className="stats button">view</button>
                                </div>
                        </div>
                </div>
        )
}
