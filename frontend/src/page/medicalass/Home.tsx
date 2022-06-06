
// import { Link } from "react-router-dom"
import '../../css/attendee.css'

export const MedicalassHome = () => {
        return (
                <div className="entire_attendee">
                        <div className="student_home nav">

                                <div className="student_home navcon">


                                        <div className="student_home navin">

                                                <i className="fa fa-home" aria-hidden="true"></i>
                                                <span>Home</span>
                                        </div>

                                        {/* <div className="student_home navin">
                                                <i className="fa fa-print" aria-hidden="true"></i>
                                                <span>Students</span>

                                        </div> */}

                                        <div className="student_home navin">
                                                <i className="fa fa-history" aria-hidden="true"></i>
                                                <span>History</span>

                                        </div>
                                        <div className="student_home navin">
                                                <i className="fa fa-sign-out" aria-hidden="true"></i>
                                                <span>Log Out</span>

                                        </div>

                                </div>

                        </div>

                        <div className="attendee_main_block">

                        <div className="attendee_main">
                                <h2>STUDENTS</h2>
                                <div className="attendee_flex">
                                        <div  className="stats card pending" style={{background: "green"}}>
                                                        
                                                <h2>ACCOUNTS </h2>
                                                <h1>PENDING</h1>
                                                <button className="stats button" style={{background: "green"}}>view</button>

                                        </div>
                                        <div  className="stats card" style={{background: "green"}}>
                                                        
                                                <h2>ACCOUNTS </h2>
                                                <h1>VERIFIED</h1>
                                                <button className="stats button" style={{background: "green"}}>view</button>

                                        </div>
                                </div>
                        </div>
                        <div className="attendee_main">
                                <h2>STAFFS</h2>
                                <div className="attendee_flex">
                                        <div  className="stats card pending" style={{background: "green"}}>
                                                        
                                                <h2>ACCOUNTS </h2>
                                                <h1>PENDING</h1>
                                                <button className="stats button" style={{background: "green"}}>view</button>

                                        </div>
                                        <div  className="stats card" style={{background: "green"}}>
                                                        
                                                <h2>ACCOUNTS </h2>
                                                <h1>VERIFIED</h1>
                                                <button className="stats button" style={{background: "green"}}>view</button>

                                        </div>
                                </div>
                        </div>
                        </div>
                </div>
        )
}
