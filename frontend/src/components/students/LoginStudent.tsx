import React, {useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/login.css'
// import {Link} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from '../../app/hooks'

export const LoginStudent = () => {

        const [matricNumber, setmatricNumber] = useState<string>('')
        const [password, setpassword] = useState<string>('')

        
        const studentData = useAppSelector(state => state.student.studentData)

        const {
                surname, otherNames, yearOfAdmission, faculty, department, religion,
                homeAddress, gender, nationality, ethnicGroup, maritalStatus, telPhone,
                guardianName, guardianRel, guardianOffAdd, guardianTelNum, guardianResAdd, dateOfBirth } = studentData

        const dispatch = useAppDispatch()
        const navigate = useNavigate()

        const studentRegData = {
                surname, 
                otherNames, 
                yearOfAdmission, 
                faculty, 
                department, 
                religion,
                homeAddress, 
                gender, 
                nationality, 
                ethnicGroup, 
                maritalStatus, 
                telPhone,
                guardianName, 
                guardianRel, 
                guardianOffAdd, 
                guardianTelNum, 
                guardianResAdd,
                matricNumber,
                password,
                dateOfBirth
        }
        

        // const [toggle, setToggle] = useState<String>('rect2')

        // const matricNo = useRef<HTMLInputElement>(null)
        // const password = useRef<HTMLInputElement>(null)
        // const rect = useRef<SVGSVGElement>(null)

        const options = {
                method: 'POST',
                headers: {
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify(studentRegData)

        }

        const handleSubmit = () => {
                fetch('http://localhost:7000/api/v1/studentqq/signup', options)
                .then(res => res.json())
                .then(data => {
                        console.log(data.message)
                        navigate('/student')
                })
                .catch((err) => {
                        console.log(err)
                        console.log(err.message)
                        console.log("error")
                        console.log(err)
                        console.log(err.message)
                })

        }
        
        // const handle1 = () => {
                
        //         console.log(rect.current)
        //         // console.log(rect.current.setAttribute)
        //         // const { current } = rect;
        //         setToggle('rect1')
        //         // current.setAttribute("class", "rect2");
        // }

        // const handle2 = () => {
        //         console.log("this is handle2")
        //         // rect.setAttribute("class", "rect1");
        //         setToggle('rect2')
        // }

        console.log(matricNumber)

        return(
                <div className="Login_container_for_flex">

                <div className="Login_al"></div>

                <div className="Login_container">
                        
                        <div className="Login_header" style={{marginLeft: '120px'}}>Create <br /> Account</div>
                        {/* <div className='Login_info'>*LASU Health Center</div> */}
                        <input 
                                // ref={matricNo} 
                                className={`Login_text Login_inc2 Login_rect2`}
                                // onFocus={handle2}
                                // onClick={handle2}
                                type="text" 
                                name="matricNo" placeholder='matric number' 
                                value={matricNumber}
                                onChange={(e) => setmatricNumber(e.target.value)}
                        /> 
                        {/* <!-- Had to remove the type "password" due to the browser user credential's autofill--> */}

                        <input 
                                // ref={password} 
                                className={`Login_text Login_pass Login_inc1 Login_rect1`} 
                                // onFocus={handle1}
                                // onClick={handle1}
                                type="password" name="Password" placeholder='Password' 
                                // style={{borderTop: "1px solid white"}}
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                        />

                        {/* <Link to="/student"> */}
                                <button 
                                        className='Login button' 
                                        onClick={() => handleSubmit()}
                                        disabled={
                                                                       
                                                matricNumber === '' 
                                                || 
                                                password === '' 
                                                ?
                                                true 
                                                : 
                                                false
                                        }
                                >CREATE</button>
                        {/* </Link> */}

                        {/* <div className="Login_info_down">
                                <div className='Login_info'>*If you have no record with health center</div>

                                <Link to="/student/register">
                                        <div className='Login_info linnk'>*please <span> register</span></div>
                                </Link>

                        </div> */}
                        {/* <svg width="390" height="549" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" ref={rect} className={`${toggle}`} >
                                <rect id='rect' className='Login_rect1'   x="45px"  y="300px"   rx="27" ry="27" width="300px" height="50px" style={{stroke: '#fff', strokeWidth: '1px', fill: 'blue'}} />
                        </svg> */}
                </div>
                
                </div>
        )
}
