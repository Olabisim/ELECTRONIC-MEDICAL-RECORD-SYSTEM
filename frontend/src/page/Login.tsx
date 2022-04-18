import React, {useRef, useState} from 'react'
import '../css/login.css'

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

                <div className="al"></div>

                <div className="container">
                        
                        <div className="header">Sign In</div>
                        <div className='info'>*Click on the input boxes</div>
                        <input ref={username} className={`text inc2 ${!toggle && 'rect2'}`}
                                onFocus={handle2}
                                onClick={handle2}
                                type="text" name="Username" placeholder='Username' value="" /> 
                        {/* <!-- Had to remove the type "password" due to the browser user credential's autofill--> */}

                        <input ref={password} className={`pass inc1 ${toggle && 'rect1'}`} 
                        onFocus={handle1}
                        onClick={handle1}
                        type="pass" name="Password" placeholder='Password' value="" />

                        <button>Sign In</button>

                        <svg width="390" height="549" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" ref={rect} className={`${toggle}`} >
                                <rect id='rect' className='rect1'   x="45px"  y="300px"   rx="27" ry="27" width="300px" height="50px" style={{stroke: '#fff', strokeWidth: '1px', fill: '#000'}} />
                        </svg>
                </div>
                
                </>
        )
}
