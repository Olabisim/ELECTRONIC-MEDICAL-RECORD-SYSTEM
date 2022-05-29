
import { Link } from 'react-router-dom'
import '../../css/input.css'

export const Form1 = () => {
        return (
                <div>
                        
                        <form>
                                
                                <div className="input-field">
                                        <label htmlFor="name">Your name:</label>
                                        <input type="text" id="name" required />
                                </div>
                                
                                
                                <div className="input-field">
                                        <label htmlFor="other_name">other name:</label>
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


                        </form>

                        <Link to="/student/second">
                        
                                <button className="home button_form">next</button>
                                
                        </Link>

                </div>
        )
}

