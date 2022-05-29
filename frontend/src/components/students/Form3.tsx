

import { Link } from "react-router-dom"
import '../../css/input.css'


export const Form3 = () => {
        return (
                <div>
                        <form>
                                <div className="input-field">
                                        <label htmlFor="name">Your name:</label>
                                        <input type="text" id="name" required />
                                </div>
                                
                                <div className="input-field">
                                        <label htmlFor="office_address">office_address:</label>
                                      <input type="text" id="office_address" required />
                                </div>
                                <div className="input-field">
                                        <label htmlFor="father_tel_No">father_tel_No:</label>
                                      <input type="text" id="father_tel_No" required />
                                </div>
                                <div className="input-field">
                                        <label htmlFor="Mother_Tel_No">Mother_Tel_No:</label>  
                                      <input type="text" id="Mother_Tel_No" required />
                                </div>

                                
                        </form>

                        
                        <Link to="/student/fourth">
                        
                                <button style={{marginTop: 0}}>next</button>
                                
                        </Link>
                </div>
        )
}

