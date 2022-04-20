
import { Link } from "react-router-dom"

import '../../css/input.css'

export const Form2 = () => {
        return (
                <div>
                        <form>
                                
                                
                                <div className="input-field">
                                        <input type="text" id="Home_Address" required />
                                        <label htmlFor="Home_Address">Home_Address:</label>
                                </div>
                                
                                <div className="input-field">
                                        <input type="text" id="sex" required />
                                        <label htmlFor="sex">sex:</label>
                                </div>
                                
                                <div className="input-field">
                                        <input type="text" id="Date_of_Birth" required />
                                        <label htmlFor="Date_of_Birth">Date_of_Birth:</label>
                                </div>
                                
                                <div className="input-field">
                                        <input type="text" id="Age" required />
                                        <label htmlFor="Age">Age:</label>
                                </div>
                                
                                <div className="input-field">
                                        <input type="text" id="nationality" required />
                                        <label htmlFor="nationality">nationality:</label>
                                </div>
                                
                                <div className="input-field">
                                        <input type="text" id="ethnic_group" required />
                                        <label htmlFor="ethnic_group">ethnic_group:</label>
                                </div>
                                
                                <div className="input-field">
                                        <input type="text" id="marital_status" required />
                                        <label htmlFor="marital_status">marital_status:</label>
                                </div>

                        </form>
                        
                        <Link to="/student/third">
                        
                                <button style={{marginTop: 0}}>next</button>
                                
                        </Link>
                </div>
        )
}

