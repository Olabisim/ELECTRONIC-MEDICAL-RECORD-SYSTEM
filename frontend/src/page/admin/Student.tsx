// import React from 'react'
import { useEffect, useState } from 'react'
import '../../css/adminreport.css'


export const AdminStudent = () => {


        // const [ allstudents, setAllstudents ] = useState<any>()

        // useEffect(() => {

        //         fetch("http://localhost:7000/api/v1/students")
        //         .then(res => res.json())
        //         .then(data => setAllstudents(data.data.students))

        // },[setAllstudents])

        // console.log(allstudents)
        // console.log('allstudents')


        return (
                <div className='main-report-dashboard'>

                        HOME
                        <section className="report-dashboard">
                                <h2 className="report-dashboard-title">Feeds Summary (as of 05/01/2019)</h2>
                                <div className="row">
                                <div className="flex-container">
                                
                                <div className="report-dashboard-item">
                                        <div className="report-dashboard-label">Successful Today</div>
                                        <div className="report-dashboard-number">359</div>
                                </div>
                                <div className="report-dashboard-item">
                                        <div className="report-dashboard-label">Sucessful last 7 Days</div>
                                        <div className="report-dashboard-number">4142</div>
                                </div>
                                <div className="report-dashboard-item">
                                        <div className="report-dashboard-label">Sucessful Last 30 Days</div>
                                        <div className="report-dashboard-number">28346</div>
                                </div>
                                <div className="report-dashboard-item">
                                        <div className="report-dashboard-label">Successful Last Year</div>
                                        <div className="report-dashboard-number">7077</div>
                                </div>
                                <div className="report-dashboard-item">
                                        <div className="report-dashboard-label">Failed Today</div>
                                        <div className="report-dashboard-number">2</div>
                                </div>
                                <div className="report-dashboard-item">
                                        <div className="report-dashboard-label">Failed Last 7 Days</div>
                                        <div className="report-dashboard-number">36</div>
                                </div>
                                <div className="report-dashboard-item">
                                        <div className="report-dashboard-label">Failed Last 30 Months</div>
                                        <div className="report-dashboard-number">735</div>
                                </div>
                                <div className="report-dashboard-item">
                                        <div className="report-dashboard-label">Failed Last Year</div>
                                        <div className="report-dashboard-number">1500</div>
                                </div>
                                </div>
                               
                                </div>
                               

                                <div className="row">
                                <div className="flex-container">
                                <div className="report-dashboard-item">
                                        <div className="report-dashboard-label">Avg Runtime Today</div>
                                        <div className="report-dashboard-number">23.902<span className="percentage-unit">s</span></div>
                                </div>
                                <div className="report-dashboard-item">
                                        <div className="report-dashboard-label">Avg Runtime Past 7 Days</div>
                                        <div className="report-dashboard-number">24.651<span className="percentage-unit">s</span></div>
                                </div>
                                <div className="report-dashboard-item">
                                        <div className="report-dashboard-label">Avg Runtime Past 60 Days</div>
                                        <div className="report-dashboard-number">22.835<span className="percentage-unit">s</span></div>
                                </div>
                                

                                </div>
                              
                                </div>
                                

                        </section>
                                


                </div>
        )
}

