
import { Link } from "react-router-dom"
import '../../css/input.css'
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { incrementCount, decrementCount } from "../../features/student/StudentSlice"




export const Form4 = () => {


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

                                <h2 className="stats h1">YOUR LOCAL GUARDIAN <br /> DETAILS</h2>
                                
                                <div className="input-field">
                                        <label htmlFor="Name">Name:</label>
                                        <input type="text" id="Name" required />
                                </div>
                                
                                <div className="input-field">
                                        <label htmlFor="relationship">relationship:</label>
                                        <input type="text" id="relationship" required />
                                </div>
                                
                                <div className="input-field">
                                        <label htmlFor="office_address">office_address:</label>
                                        <input type="text" id="office_address" required />
                                </div>
                                
                                <div className="input-field">
                                        <label htmlFor="Telephone_No">Telephone_No:</label>
                                        <input type="text" id="Telephone_No" required />
                                </div> 
                                
                                <div className="input-field">
                                        <label htmlFor="Residence">Residence:</label>
                                        <input type="text" id="Residence" required />
                                </div>

                                
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

