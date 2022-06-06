

// import '../../css/report_table.css'

export const DoctorStudentView = () => {
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

                        </div>

                        <div className="history_main">
                                <div className="history_main_in">

                                        <h2 className="h2">NAME: AJOSEH OLABISI MINASU</h2>
                                        <h2 className="h2">BP LEVEL: 90MGH</h2>
                                        <h2 className="h2">HEALTH STATUS: NORMAL</h2>
                                        {/* <p>This is a list of activities performed.</p> */}

                                        <div>
                                               <h2>Patient (questioning e.g how you feel) </h2> 
                                               <textarea className='presentcomplaints' placeholder="present complaints" 
                                                        // value={presentComplaint} 
                                                        // onChange={(e) => setPresentComplaint(e.target.value)}
                                                >

                                                </textarea>
                                               <h2>Make a lab test </h2> 
                                               <button className=" stats card h1">YES</button> OR <button className=" stats card h1">NO</button>
                                               <h2>Prescribe drugs </h2> 
                                               <textarea className='presentcomplaints' placeholder="present complaints" 
                                                        // value={presentComplaint} 
                                                        // onChange={(e) => setPresentComplaint(e.target.value)}
                                                >

                                                </textarea>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}