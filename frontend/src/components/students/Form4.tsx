
import { Link } from "react-router-dom"
import '../../css/input.css'


export const Form4 = () => {
        return (
                <div>
                        <h2>LOCAL GUARDIAN</h2>
                        <form>
                                
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
                                
                        </form>
                        
                        <Link to="/student/fifth">
                        
                                <button style={{ marginTop: 0}}>next</button>
                                
                        </Link>
                </div>
        )
}

