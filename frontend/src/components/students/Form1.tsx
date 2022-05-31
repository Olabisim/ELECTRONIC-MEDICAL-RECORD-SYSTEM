
import { Link } from 'react-router-dom'
import '../../css/input.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { incrementCount, decrementCount } from '../../features/student/StudentSlice'

export const Form1 = () => {

        const count = useAppSelector(state => state.student.count)
        
        const dispatch = useAppDispatch()

        return (
                <>
                {
                        count === 1 
                        &&
                        (
                                <div className="form_root main">
                                        <div className="form_root flex_one">
                                                <h2 className="stats h1 new_font">
                
                                                STEP {count} / 6
                                                </h2>
                                                <img src="../../../form_leaf.svg" alt="designs" />
                                        </div>
                                        <div className="form_root flex_two">
                                                
                                                <div className="input-field">
                                                        <label htmlFor="name">Your name:</label>
                                                        <input type="text" id="name" required />
                                                </div>
                                                
                                                
                                                <div className="input-field">
                                                        <label htmlFor="other_name">other names:</label>
                                                      <input type="text" id="other_name" required />
                                                </div>
                                                
                                                <div className="input-field">
                                                        <label htmlFor="year_of_admission">year of admission:</label>
                                                      <input type="text" id="year_of_admission" required />
                                                </div>
                                                
                                                <div className="input-field">
                                                        <label htmlFor="faculty">faculty:</label>
                                                      <input type="text" id="faculty" required />
                  
                                                </div>                                
                                                <div className="input-field">
                                                        <label htmlFor="department">department:</label>
                                                      <input type="text" id="department" required />
                  
                                                </div>                                
                                                <div className="input-field">
                                                        <label htmlFor="religion">religion:</label>
                                                      <input type="text" id="religion" required />
                  
                                                </div>                                
                                                <div className="input-field">
                                                        <label htmlFor="date">date:</label>
                                                      <input type="text" id="date" required />
                                                </div>
                
                                                <div className="input-field">
                                                        <label htmlFor="office_address">office address:</label>
                                                      <input type="text" id="office_address" required />
                                                </div>
                
                                                {/* <Link to="/student/fourth"> */}
                                        
                                                        <button className="stats button"  onClick={() => dispatch(decrementCount()) }>prev</button>
                                                        
                                                {/* </Link> */}
                                                
                                                {/* <Link to="/student/second"> */}
                                        
                                                        <button className="stats button" style={{marginLeft: "65px"}} onClick={() => dispatch(incrementCount()) } >next</button>
                                                        
                                                {/* </Link> */}
                                        </div>
                
                
                                </div>

                        )
                }
                </>
        )
}

