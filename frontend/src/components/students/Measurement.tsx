

import { Link } from "react-router-dom"

export const Measurement = () => {
        return (
                <div>
                        <h2>MEASUREMENT</h2>

                        <form>
                                
                                <div className="input-field">
                                        <input type="text" id="Height" required />
                                        <label htmlFor="Height">Your Height:</label>
                                </div>

                                
                                <div className="input-field">
                                        <input type="text" id="Weight" required />
                                        <label htmlFor="Weight">Your Weight:</label>
                                </div>
                                
                                <p>Chest</p>
                                <div className="input-field">
                                        <input type="text" id="Insp" required />
                                        <label htmlFor="Insp">Your Insp:</label>
                                </div>
                                <div className="input-field">
                                        <input type="text" id="Exp." required />
                                        <label htmlFor="Exp">Your Exp:</label>
                                </div>
                                <div className="input-field">
                                        <input type="text" id="Girth_of_abdomen" required />
                                        <label htmlFor="Girth_of_abdomen">Your Girth_of_abdomen:</label>
                                </div>

                                <div className="input-field">
                                        <input type="text" placeholder="Does the student appeaer to be healthy and vigorous? " />
                                        <label htmlFor="Girth_of_abdomen">Your Girth_of_abdomen:</label>
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

