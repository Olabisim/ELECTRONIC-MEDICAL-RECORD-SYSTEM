
import '../css/home.css'
import { Link } from 'react-router-dom'

const Home = () => {


        return (
                <div className='parent_home'>
                       
                        <h2>PLEASE LOG IN TO YOUR HEALTH CENTER INFORMATIONS </h2>

                       <Link to="/student" >
                        <div className='home btn-wrap'>
                                        <div>
                                                <div className='home cnt cnt-4'><p className='home text'>
                                                        
                                                                Student
                                                        </p>
                                                        <i className='home icon' data-feather="chevron-right"></i>
                                                </div>
                                                
                                        </div>
                        </div>
                        </Link>

                        <Link to="/staff" >
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
                        </Link>

                </div>
        )
}

export default Home;