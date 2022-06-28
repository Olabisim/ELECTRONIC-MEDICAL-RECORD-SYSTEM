import React, {useRef, useState} from 'react'
import '../css/login.css'
import {Link, useNavigate } from 'react-router-dom'

export const Login = () => {


        const navigate = useNavigate()

        const [matric, setMatric] = useState<string>('')
        const [pass, setPass] = useState<string>('')
        
        const [toggle, setToggle] = useState<String>('rect2')

        const username = useRef<HTMLInputElement>(null)
        const password = useRef<HTMLInputElement>(null)
        const rect = useRef<SVGSVGElement>(null)

        let data = {
                matricNumber: matric,
                password: pass 
        }

        const handleLogin = () => {
                fetch('http://localhost:7000/api/v1/studentqq/login', {
                        method: 'POST',
                        headers: {
                                'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => {
                        console.log(data)
                        localStorage.setItem("student", JSON.stringify(data.data.student))
                        navigate('/student')
                })
                .catch(err => console.log(err))

        }

        console.log(pass, "  ", matric)

        
        return(
                <div className="Login_container_for_flex">

                <div className="Login_al"></div>

                <div className="Login_container">
                        
                        <div className="Login_header">Sign In</div>
                        {/* <div className='Login_info'>*LASU Health Center</div> */}
                        <input 
                                ref={username} 
                                className={`Login_text Login_inc2 ${!toggle && 'Login_rect2'}`}
                                value={matric}
                                onChange={e => setMatric(e.target.value)}
                                type="text" 
                                placeholder='Username' 
                        />

                        <input 
                                ref={password} 
                                className={`Login_text Login_pass Login_inc1 ${toggle && 'Login_rect1'}`} 
                                value={pass}
                                onChange={e => setPass(e.target.value)}
                                type="password" 
                                name="Password" 
                                placeholder='Password' 
                        />

                        <Link to="/home">
                                <button className='Login button' onClick={() => handleLogin()} >Sign In</button>
                        </Link>

                        <div className="Login_info_down">
                                <div className='Login_info'>*If you have no record with health center</div>

                                <Link to="/home">
                                        <div className='Login_info linnk'>*please <span> register</span></div>
                                </Link>

                        </div>
                </div>
                
                </div>
        )
}
