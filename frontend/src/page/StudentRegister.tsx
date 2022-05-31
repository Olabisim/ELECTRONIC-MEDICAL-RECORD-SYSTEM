
import '../css/studentregister.css'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { incrementCount } from '../features/student/StudentSlice';
import { Form1 } from '../components/students/Form1';
import { Form2 } from '../components/students/Form2';
import { Form4 } from '../components/students/Form4'
import { HistoryForm } from '../components/students/HistoryForm'
import { LoginStudent } from '../components/students/LoginStudent'
import { PresentComplaints } from '../components/students/PresentComplaints'

export const StudentRegister = () => {


        const count = useAppSelector(state => state.student.count)

        const dispatch = useAppDispatch()

        return (
                <>
                
                {
                        count === 0
                                ?
                                (
                                        <>
                                        
                                                <div className="StudentRegister_main_flex">
                                                        <div className="StudentRegister_main">
                                                                
                                                                <p>
                                                                        You must complete this as records are not stored half way done.<br /><br />
                                                                        NOTE:: students must report to the Health Center to take measurements for completion of the registration.
                                                                </p>
                                                                
                                                                <button className="stats button " onClick={() => dispatch(incrementCount())}>START REGISTRATION </button>
                                                                <div>
                                                                        <button  className="StudentRegister_link">

                                                                                <Link to="/student/login">go back</Link>
                                                                                
                                                                        </button>
                                                                
                                                                </div>
                                                        </div>
                                                </div>
                                        </>
                                )
                                :
                        count === 1
                                ?
                                (
                                        <Form1 />
                                )
                                :
                        count === 2
                                ?
                                (
                                        <>
                                        <Form2 />
                                        </>
                                )
                                :
                        count === 3
                                ?
                                (
                                        <>
                                        <Form4 />
                                        </>
                                )
                                :
                        count === 4
                                ?
                                (
                                        <>
                                        <HistoryForm />
                                        </>
                                )
                                :
                        count === 5
                                ?
                                (
                                        <>
                                        <PresentComplaints />
                                        </>
                                )
                                :
                        count === 6
                                ?
                                (
                                        <>
                                        <LoginStudent />
                                        </>
                                )
                                :
                                (
                                        <>
                                        <LoginStudent />
                                        </>
                                )

                }
                </>
        )
} 

