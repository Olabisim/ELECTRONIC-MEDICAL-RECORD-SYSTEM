
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { incrementCount, decrementCount } from "../../features/student/StudentSlice"
import '../../css/presentcomplaints.css'
import {useState} from 'react'


function PresentComplaints() {        

        const [presentComplaint, setPresentComplaint] = useState<string>('')

        const count = useAppSelector(state => state.student.count)

        const dispatch = useAppDispatch()

        return (
                <div className="form_root main">
                        <div className="form_root flex_one">
                                <h2 className="stats h1 new_font">

                                STEP {count} / 6
                                </h2>
                                <img src="../../../form_leaf.svg" alt="designs" />
                        </div>
                        
                        <div className="form_root flex_two">

                                <h2 className="stats h1">PLEASE INCLUDE ANY <br /> PRESENT COMPLAINTS</h2>
                                
                                <section className='presentcomplaints'>

                                        <textarea className='presentcomplaints' placeholder="present complaints">

                                        </textarea>

                                </section>
                                
                                
                                {/* <Link to="/student/fourth"> */}
                        
                                        <button className="stats button" onClick={() => dispatch(decrementCount())} >prev</button>
                                        
                                {/* </Link> */}

                                {/* <Link to="/student/fifth"> */}
                        
                                        <button className="stats button" style={{marginLeft: "65px"}} onClick={() => dispatch(incrementCount())} >next</button>
                                        
                                {/* </Link> */}
                                
                        </div>

                </div>
        )       
}

export { PresentComplaints };