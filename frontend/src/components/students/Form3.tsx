

import { Link } from "react-router-dom"

export const Form3 = () => {
        return (
                <div>
                        <form>
                                
                                <div className="input-field">
                                      <input type="text" id="office_address" required />
                                        <label htmlFor="Home_Address">office_address:</label>
                                  
                                </div>
                                <div className="input-field">
                                      <input type="text" id="father_tel_No" required />
                                        <label htmlFor="Home_Address">father_tel_No:</label>
                                  
                                </div>
                                <div className="input-field">
                                      <input type="text" id="Home_address" required />
                                        <label htmlFor="Home_Address">Home_address:</label>
                                  
                                </div>
                                <div className="input-field">
                                      <input type="text" id="Mother_Tel_No" required />
                                        <label htmlFor="Home_Address">Mother_Tel_No:</label>  
                                </div>

                                
                        </form>

                        
                        <Link to="/student/fourth">
                        
                                <button style={{marginTop: 0}}>next</button>
                                
                        </Link>
                </div>
        )
}

