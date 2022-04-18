import React from 'react'
import '../css/login.css'

export const Login = () => {
        return(
                <>

                <div className="al"></div>

                <div className="container">
                        
                        <div className="header">Sign In</div>
                        <div className='info'>*Click on the input boxes</div>
                        <input id='username' className='text inc2' 
                                // onFocus="handle2()" 
                                type="text" name="Username" placeholder='Username' value="" /> 
                        {/* <!-- Had to remove the type "password" due to the browser user credential's autofill--> */}

                        <input id='password' className='pass inc1' 
                        // onfocus="handle1()"
                        type="pass" name="Password" placeholder='Password' value="" />

                        <button>Sign In</button>

                        <svg width="390" height="549" xmlns="http://www.w3.org/2000/svg" >
                                <rect id='rect' className='rect1'   x="45px"  y="300px"   rx="27" ry="27" width="300px" height="50px" style={{stroke: '#fff', strokeWidth: '1px', fill: '#000'}} />
                        </svg>
                </div>
                
                </>
        )
}
