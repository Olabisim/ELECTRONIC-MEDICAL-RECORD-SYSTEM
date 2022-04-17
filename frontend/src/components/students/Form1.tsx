
import { Link } from 'react-router-dom'

export const Form1 = () => {
        return (
                <div>
                        <form>
                                <input type="text" placeholder="surname" />
                                <input type="text" placeholder="other names" />
                                <input type="text" placeholder="year of admission" />
                                <input type="text" placeholder="faculty" />
                                <input type="text" placeholder="department" />
                                <input type="text" placeholder="religion" />
                                <input type="text" placeholder="date" />


                        </form>

                        <Link to="/student/second">
                        
                                <button>next</button>
                                
                        </Link>

                </div>
        )
}

