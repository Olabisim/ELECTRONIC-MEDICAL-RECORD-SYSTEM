
import { Link } from "react-router-dom"

export const Form4 = () => {
        return (
                <div>
                        <h2>LOCAL GUARDIAN</h2>
                        <form>

                                <input type="text" placeholder="Name" />
                                <input type="text" placeholder="relationship" />
                                <input type="text" placeholder="office address" />
                                <input type="text" placeholder="Telephone No" />
                                <input type="text" placeholder="Residence" />
                                
                        </form>
                        
                        <Link to="/student/fifth">
                        
                                <button>next</button>
                                
                        </Link>
                </div>
        )
}

