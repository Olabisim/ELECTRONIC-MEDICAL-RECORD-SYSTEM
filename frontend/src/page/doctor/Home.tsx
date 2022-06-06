
import { Link } from 'react-router-dom'

export const DoctorHome = () => {

        return (
                <div className="student_home main">

                        <div className="student_home nav">

                                <div className="student_home navcon">


                                        <div className="student_home navin">

                                                <i className="fa fa-home" aria-hidden="true"></i>
                                                <span>Home</span>
                                        </div>

                                        <div className="student_home navin">
                                                <i className="fa fa-print" aria-hidden="true"></i>
                                                <span>Students</span>

                                        </div>

                                        <div className="student_home navin">
                                                <i className="fa fa-history" aria-hidden="true"></i>
                                                <span>History</span>

                                        </div>
                                        <div className="student_home navin">
                                                <i className="fa fa-sign-out" aria-hidden="true"></i>
                                                <span>Log Out</span>

                                        </div>

                                </div>


                                {/* 

                                HOME 

                                TO PRINT FORMS 

                                RECORDS: HOW MANY TIMES A STUDENT HAS VISITED WITH TIMESTAMP

                                LOGOUT
                                
                                printed copies 
                                
                                */}

                        </div>

                        <div className='student_home stats'>
                                <div className="student_home wrap">

                                        <div  className="stats card pending" style={{background: "green"}}>
                                                
                                                <h2>STUDENTS</h2>
                                                <h1>PENDING</h1>

                                                <Link to="/nurse/student">
                                                        
                                                        <button className="stats button" style={{background: "green"}}>view</button>

                                                </Link>

                                        </div>
                                        <div className="stats card">

                                                <h2>STUDENTS </h2>
                                                <h1>VERIFIED</h1>
                                                <button className="stats button">view</button>

                                        </div>

                                </div>

                                <div className="student_home wrap">
                                <div  className="stats card pending" style={{background: "green"}}>
                                                
                                                <h2>STAFFS</h2>
                                                <h1>PENDING</h1>

                                                <Link to="/nurse/student">
                                                        
                                                        <button className="stats button" style={{background: "green"}}>view</button>

                                                </Link>

                                        </div>
                                        <div className="stats card">

                                                <h2>STAFFS </h2>
                                                <h1>VERIFIED</h1>
                                                <button className="stats button">view</button>

                                        </div>

                                </div>
                        </div>
                </div>
        )
}
