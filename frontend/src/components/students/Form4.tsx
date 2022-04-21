
import { Link } from "react-router-dom"
import '../../css/input.css'


export const Form4 = () => {
        return (
                <div>
                        <h2>LOCAL GUARDIAN</h2>
                        <form>
                                
                                <div className="input-field">
                                        <input type="text" id="Name" required />
                                        <label htmlFor="Name">Name:</label>
                                </div>
                                
                                <div className="input-field">
                                        <input type="text" id="relationship" required />
                                        <label htmlFor="relationship">relationship:</label>
                                </div>
                                
                                <div className="input-field">
                                        <input type="text" id="office_address" required />
                                        <label htmlFor="office_address">office_address:</label>
                                </div>
                                
                                <div className="input-field">
                                        <input type="text" id="Telephone_No" required />
                                        <label htmlFor="Telephone_No">Telephone_No:</label>
                                </div> 
                                
                                <div className="input-field">
                                        <input type="text" id="Residence" required />
                                        <label htmlFor="Residence">Residence:</label>
                                </div>
                                
                        </form>
                        
                        <Link to="/student/fifth">
                        
                                <button style={{ marginTop: 0}}>next</button>
                                
                        </Link>
                </div>
        )
}

