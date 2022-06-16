

export const SideNav = () => {
        return (
                <div>
                        
                        <div className="student_home nav">

                                <div className="student_home navcon">


                                        <div className="student_home navin">

                                                <i className="fa fa-home" aria-hidden="true"></i>
                                                <span>Home</span>
                                        </div>

                                        <div className="student_home navin">
                                                <i className="fa fa-print" aria-hidden="true"></i>
                                                <span>Print</span>

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

                </div>
        )
}