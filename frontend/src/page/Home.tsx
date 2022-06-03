
import '../css/defaults.css'
import { Link } from 'react-router-dom'

const Home = () => {


        return (
                <div className='parent_home'>
                       <div className='student_or_staffmain'>
                               
                                <h2 className='student_or_staffh2'>PLEASE LOG IN FOR ANY HEALTH<br /> CENTER ACTIVITIES </h2>

                                <div className="student_home wrap">
                                        
                                        <div className="stats card">
                                                        
                                                        <h2 className='student_or_staffh2in'>STUDENT</h2>
                                                                        {/* <h1>123</h1> */}
                                                        <Link to="/student/register" >
                                                                <button className="stats button">REGISTER</button>
                                                        </Link>
                        
                                        </div>
                                        <div className="stats card">
                                                                        
                                                        <h2 className='student_or_staffh2in'>STAFF</h2>
                                                                        {/* <h1>123</h1> */}
                                                        <Link to="/staff/register" >
                                                                <button className="stats button">REGISTER</button>
                                                        </Link>
                        
                                        </div>

                                </div>

                                {/* <div className='home btn-wrap'>
                                                <div>
                                                        <div className='home cnt cnt-4'><p className='home text'>
                                                                
                                                                        Student
                                                                </p>
                                                                <i className='home icon' data-feather="chevron-right"></i>
                                                        </div>
                                                        
                                                </div>
                                </div> */}

                                {/* <Link to="/staff" >
                                <div className='home btn-wrap'>
                                        <div>
                                                <div className='home cnt cnt-4'>
                                                        <p className='home text'> 
                                                        
                                                                Staff
                                                        </p>
                                                        <i className='home icon' data-feather="chevron-right"></i>
                                                </div>
                                        </div>
                                </div>
                                </Link> */}
                       </div>

                </div>
        )
}

export default Home;