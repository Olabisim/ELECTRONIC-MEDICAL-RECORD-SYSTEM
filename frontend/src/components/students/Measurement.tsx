

import { Link } from "react-router-dom"

export const Measurement = () => {
        return (
                <div>
                        <h2>MEASUREMENT</h2>

                        <form>
                                
                                <div className="input-field">
                                        <label htmlFor="Height">Your Height:</label>
                                        <input type="text" id="Height" required />
                                </div>

                                
                                <div className="input-field">
                                        <label htmlFor="Weight">Your Weight:</label>
                                        <input type="text" id="Weight" required />
                                </div>
                                
                                <p>Chest</p>
                                <div className="input-field">
                                        <label htmlFor="Insp">Your Insp:</label>
                                        <input type="text" id="Insp" required />
                                </div>
                                <div className="input-field">
                                        <label htmlFor="Exp">Your Exp:</label>
                                        <input type="text" id="Exp." required />
                                </div>
                                <div className="input-field">
                                        <label htmlFor="Girth_of_abdomen">Your Girth_of_abdomen:</label>
                                        <input type="text" id="Girth_of_abdomen" required />
                                </div>

                                <div className="input-field">
                                        <label htmlFor="Girth_of_abdomen">Your Girth_of_abdomen:</label>
                                        <input type="text" placeholder="Does the student appeaer to be healthy and vigorous? " />
                                </div>

                                *Fat, Well norished, Thin
                                State of nutrition:


                        </form>
                        
                        <Link to="/student">
                        
                                <button style={{marginTop: 0}}>complete</button>
                                
                        </Link>
                </div>
        )
}

