import React from "react";
import '../css/stats.css'

export const Stats = () => {
        return (
                <div className="stats parent">
                        <div>
                                <img src="../../STATS.svg" alt="" />
                        </div>
                        <div> 
                                <div className="stats card">

                                        <h2>TOTAL STUDENTS </h2>
                                        <h1>123</h1>
                                        <button className="stats button">view</button>
                                </div>
                                <div className="stats card">

                                        <h2>TOTAL STAFFS </h2>
                                        <h1>1234</h1>
                                        <button className="stats button">view</button>
                                </div>
                        </div>
                </div>
        )
}
