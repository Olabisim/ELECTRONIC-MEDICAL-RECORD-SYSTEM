
import { Link } from 'react-router-dom'
import '../../css/input.css'

export const Form1 = () => {
        return (
                <div>
                        
                        <form>
                                
                                <div className="input-field">
                                        <input type="text" id="name" required />
                                        <label htmlFor="name">Your name:</label>
                                </div>
                                
                                
                                <div className="input-field">
                                      <input type="text" id="other_name" required />
                                        <label htmlFor="other_name">other name:</label>
                                </div>
                                
                                <div className="input-field">
                                      <input type="text" id="year_of_admission" required />
                                        <label htmlFor="year_of_admission">year of admission:</label>
                                </div>
                                
                                <div className="input-field">
                                      <input type="text" id="faculty" required />
                                        <label htmlFor="faculty">faculty:</label>
  
                                </div>                                
                                <div className="input-field">
                                      <input type="text" id="department" required />
                                        <label htmlFor="department">department:</label>
  
                                </div>                                
                                <div className="input-field">
                                      <input type="text" id="religion" required />
                                        <label htmlFor="religion">religion:</label>
  
                                </div>                                
                                <div className="input-field">
                                      <input type="text" id="date" required />
                                        <label htmlFor="date">date:</label>
                                </div>


                        </form>

                        <Link to="/student/second">
                        
                                <button className="button_form">next</button>
                                
                        </Link>

                </div>
        )
}

