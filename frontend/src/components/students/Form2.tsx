
import { Link } from "react-router-dom"

import '../../css/input.css'


export const Form2 = () => {
        return (
                <div>
                        <form>
                                
                                
                                <div className="input-field">
                                        <label htmlFor="Home_Address">Home_Address:</label>
                                        <input type="text" id="Home_Address" required />
                                </div>
                                
                                <div className="input-field">
                                        <label htmlFor="sex">sex:</label>
                                        <input type="text" id="sex" required />
                                </div>
                                
                                <div className="input-field">
                                        <label htmlFor="Date_of_Birth">Date_of_Birth:</label>
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
                                        <label htmlFor="ethnic_group">ethnic_group:</label>
                                        <input type="text" id="ethnic_group" required />
                                </div>
                                
                                <div className="input-field">
                                        <label htmlFor="marital_status">marital_status:</label>
                                        <input type="text" id="marital_status" required />
                                </div>

                        </form>
                        
                        <Link to="/student/third">
                        
                                <button style={{marginTop: 0}}>next</button>
                                
                        </Link>
                </div>
        )
}

