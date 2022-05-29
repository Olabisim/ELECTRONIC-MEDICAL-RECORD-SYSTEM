
import '../css/studentregister.css'
import { Link } from 'react-router-dom'


export const StudentRegister = () => {
        return (
                <div className="StudentRegister_main_flex">
                        <div className="StudentRegister_main">
                                <p >
                                
                                You must complete this as records are not stored half way done.<br /><br />
                                NOTE:: students must report to the Health Center to take measurements for completion of the registration.
                                </p>
                                <button className="stats button">START REGISTRATION</button>
                                <div>
                                        <button  className="StudentRegister_link">

                                                        <Link to="/student/login">go back</Link>
                                                
                                        </button>
                                
                                </div>
                        </div>
                </div>
        )
} 

