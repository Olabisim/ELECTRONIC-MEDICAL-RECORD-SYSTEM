import React, {useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/login.css'
// import {Link} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from '../../app/hooks'

export const StaffSignup = () => {

        const [staffNo, setStaffNo] = useState<string>('')
        const [password, setpassword] = useState<string>('')

        
        const staffData = useAppSelector(state => state.staff.staffData)
        
        const {
                surname, otherNames, department, religion,
                homeAddress, gender, nationality, ethnicGroup, maritalStatus, telPhone, dateOfBirth } = staffData

        const dispatch = useAppDispatch()
        const navigate = useNavigate()

        const staffRegData = {
                surname, 
                otherNames, 
                department, 
                religion,
                homeAddress, 
                gender, 
                nationality, 
                ethnicGroup, 
                maritalStatus, 
                telPhone,
                staffNo,
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
                body: JSON.stringify(staffRegData)

        }

        const handleSubmit = () => {
                console.log('loading')
                fetch('http://localhost:7000/api/v1/staff/signup', options)
                .then(res => res.json())
                .then(data => {
                        console.log(data.message) 
                        console.log(data.data) 
                        navigate('/staff')
                        console.log('done')
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

        console.log(staffNo)

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
                                name="matricNo" placeholder='staff number' 
                                value={staffNo}
                                onChange={(e) => setStaffNo(e.target.value)}
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
                                                                       
                                                staffNo === '' 
                                                || 
                                                password === '' 
                                                ?
                                                true 
                                                : 
                                                false
                                        }
                                >CREATE</button>
                </div>
                
                </div>
        )
}
