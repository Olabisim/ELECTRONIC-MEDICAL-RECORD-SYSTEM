
import { useEffect, useState } from 'react'
import '../../css/studenthome.css'

export const Student = () => {

        const [userDetails, setUserDetails ] = useState({})

        useEffect(() => {

                const items = JSON.parse(localStorage.getItem("user")!)

                if(items) {
                        setUserDetails(items)
                }

                console.log(items.surname)
                console.log(typeof(items))

                console.log(userDetails)
                console.log(userDetails)
                console.log(items)

        }, [])

        return (
                <div className="student_home main">


                        <div className="student_home nav">

                                <div className="student_home navcon">


                                        <div className="student_home navin">

                                                <i className="fa fa-home" aria-hidden="true"></i>
                                                <span>
                                                        {/* {userDetails && userDetails?.surname } */}
                                                </span>
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

                        <div className='student_home stats'>
                                <div className="student_home wrap">

                                        <div  className="stats card" style={{background: "green"}}>
                                                
                                                <h2>ACCOUNT STATUS </h2>
                                                <h1>VERIFIED</h1>
                                                <button className="stats button" style={{background: "green"}}>view</button>

                                        </div>
                                        <div className="stats card">

                                                <h2>NO. OF VISITS </h2>
                                                <h1>123</h1>
                                                <button className="stats button">view</button>

                                        </div>

                                </div>

                                <div className="student_home wrap">
                                        <div className="stats card">
                                                
                                                <h2>MEET A DOCTOR </h2>
                                                {/* <h1></h1> */}
                                                <button className="stats button">CALL</button>

                                        </div>
                                        <div className="stats card">
                                                
                                                <h2>CARD DETAILS</h2>
                                                {/* <h1>123</h1> */}
                                                <button className="stats button">PRINT</button>

                                        </div>

                                </div>
                        </div>
                </div>
        )
}

