import { useState} from 'react'
import '../css/login.css'
import {Link, useLocation} from 'react-router-dom'


export const DefaultLogin = () => {

        const [email, setEmail] = useState<string>('')
        const [password, setPassword] = useState<string>('')

        const location = useLocation()

        // console.log(location.pathname)

        return(
                <div className="Login_container_for_flex">

                        <div className="Login_al"></div>

                        <div className="Login_container">
                                
                                <div className="Login_header" style={{marginLeft: '120px'}}>{location.pathname} <br /> Account</div>
                                {/* <div className='Login_info'>*LASU Health Center</div> */}
                                <input 
                                        className={`Login_text Login_inc2 Login_rect2`}
                                        type="text" 
                                        name="matricNo" placeholder='Email' 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                /> 
                                {/* <!-- Had to remove the type "password" due to the browser user credential's autofill--> */}

                                <input 
                                        className={`Login_text Login_pass Login_inc1 Login_rect1`} 
                                        type="password" name="Password" placeholder='Password' 
                                        // style={{borderTop: "1px solid white"}}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                />

                                <Link to="/student">
                                        <button className='Login button'>LOG IN</button>
                                </Link>
                        </div>
                
                </div>
        )
}
