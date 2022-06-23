
import '../../css/studentregister.css'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { incrementCount } from '../../features/staff/StaffSlice';
import { Form1 } from '../../components/staffs/Form1';
import { Form2 } from '../../components/staffs/Form2';
import { StaffSignup } from '../../components/staffs/StaffSignup'

export const StaffRegister = () => {


        const count = useAppSelector(state => state.staff.count)

        const dispatch = useAppDispatch()

        return (
                <>
                
                {
                        count === 0
                                ?
                                (
                                        <>
                                        
                                                <div className="StudentRegister_main_flex">
                                                        <div className="StudentRegister_main staff">
                                                                
                                                                <p>
                                                                        You must complete this as records are not stored half way done.<br /><br />
                                                                </p>
                                                                
                                                                <button className="stats button " onClick={() => dispatch(incrementCount({}))}>START REGISTRATION </button>
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
                                        <StaffSignup />
                                        </>
                                )
                                :
                                (
                                        <>
                                        <StaffSignup />
                                        </>
                                )

                }
                </>
        )
} 

