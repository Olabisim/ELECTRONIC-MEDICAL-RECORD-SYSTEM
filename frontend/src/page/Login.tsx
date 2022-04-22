import React, {useRef, useState} from 'react'
import '../css/login.css'
import {Link} from 'react-router-dom'

export const Login = () => {

        const [toggle, setToggle] = useState<String>('rect2')

        const username = useRef<HTMLInputElement>(null)
        const password = useRef<HTMLInputElement>(null)
        const rect = useRef<SVGSVGElement>(null)

        
        const handle1 = () => {
                
                console.log(rect.current)
                // console.log(rect.current.setAttribute)
                const { current } = rect;
                setToggle('rect1')
                // current.setAttribute("class", "rect2");
        }

        const handle2 = () => {
                console.log("this is handle2")
                // rect.setAttribute("class", "rect1");
                setToggle('rect2')
        }

        return(
                <>

                <div className="Login_al"></div>

                <div className="Login_container">
                        
                        <div className="Login_header">Sign In</div>
                        <div className='Login_info'>*Click on the input boxes</div>
                        <input 
                                ref={username} 
                                className={`Login_text Login_inc2 ${!toggle && 'Login_rect2'}`}
                                onFocus={handle2}
                                onClick={handle2}
                                type="text" 
                                name="Username" placeholder='Username' 
                                // value="" 
                        /> 
                        {/* <!-- Had to remove the type "password" due to the browser user credential's autofill--> */}

                        <input 
                        ref={password} 
                        className={`Login_pass Login_inc1 ${toggle && 'Login_rect1'}`} 
                        onFocus={handle1}
                        onClick={handle1}
                        type="pass" name="Password" placeholder='Password' 
                        // value="" 
                        />

                        <Link to="/home">
                                <button>Sign In</button>
                        </Link>

                        <svg width="390" height="549" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" ref={rect} className={`${toggle}`} >
                                <rect id='rect' className='Login_rect1'   x="45px"  y="300px"   rx="27" ry="27" width="300px" height="50px" style={{stroke: '#fff', strokeWidth: '1px', fill: 'blue'}} />
                        </svg>
                </div>
                
                </>
        )
}
