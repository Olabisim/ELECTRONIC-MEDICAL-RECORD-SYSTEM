
import { Link } from "react-router-dom"
import '../../css/input.css'
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { incrementCount, decrementCount } from "../../features/student/StudentSlice"



export const Form2 = () => {

        const count = useAppSelector(state => state.student.count)

        const dispatch = useAppDispatch()

        return (
                <div className="form_root main">
                        <div className="form_root flex_one">
                                <h2 className="stats h1 new_font">

                                STEP {count} / 5
                                </h2>
                                <img src="../../../form_leaf.svg" alt="designs" />
                        </div>
                        <div className="form_root flex_two">
                                
                                
                                <div className="input-field">
                                        <label htmlFor="Home_Address">Home Address:</label>
                                        <input type="text" id="Home_Address" required />
                                </div>
                                
                                <div className="input-field">
                                        <label htmlFor="sex">sex:</label>
                                        <input type="text" id="sex" required />
                                </div>
                                
                                <div className="input-field">
                                        <label htmlFor="Date_of_Birth">Date of Birth:</label>
                                        <input type="text" id="Date_of_Birth" required />
                                </div>
                                
                                <div className="input-field">
                                        <label htmlFor="Age">Age:</label>
                                        <input type="text" id="Age" required />
                                </div>
                                
                                <div className="input-field">
                                        <label htmlFor="nationality">nationality:</label>
                                        <input type="text" id="nationality" required />
                                </div>
                                
                                <div className="input-field">
                                        <label htmlFor="ethnic_group">ethnic group:</label>
                                        <input type="text" id="ethnic_group" required />
                                </div>
                                
                                <div className="input-field">
                                        <label htmlFor="marital_status">marital status:</label>
                                        <input type="text" id="marital_status" required />
                                </div>

                                <div className="input-field">
                                        <label htmlFor="father_tel_No">father tel No:</label>
                                      <input type="text" id="father_tel_No" required />
                                </div>

                                <div className="input-field">
                                        <label htmlFor="Mother_Tel_No">Mother Tel No:</label>  
                                      <input type="text" id="Mother_Tel_No" required />
                                </div>

                                {/* <Link to="/student/fourth"> */}
                        
                                        <button className="stats button" onClick={() => dispatch(decrementCount())}>prev</button>
                                        
                                {/* </Link> */}

                                {/* <Link to="/student/fourth"> */}
                        
                                        <button className="stats button" style={{marginLeft: "65px"}}  onClick={() => dispatch(incrementCount())} >next</button>
                                        
                                {/* </Link> */}

                        </div>
                        
                </div>
        )
}

