
import { Link } from "react-router-dom"
import '../../css/select_option.css'

export const HistoryForm = () => {

        let female:boolean = true

        return (
                <div>

                        <h2>HISTORY (Personal & Family) </h2>

                        {/* 

                        <div class="can-toggle">
                                <input id="a" type="checkbox">
                                <label for="a">
                                <div class="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                                </label>
                        </div> 

                        */}

                        <form>

                                <div>
                                        
                                        <h4>Any nervous disease?</h4>

                                        <div className="can-toggle">
                                                <input id="a" type="checkbox" />
                                                <label htmlFor="a">
                                                <div className="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                                                </label>
                                        </div>
                                        
                                </div>

                                <label>Asthma, blood-splitting, pleurisy of any disease of chest or lungs?</label>
                                <select name="cars" id="cars">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                </select>
                                
                                <label>Heart trouble of any kind? </label>
                                <select name="cars" id="cars">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                </select>

                                <label>Jaundice?</label>
                                <select name="cars" id="cars">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                </select>

                                <label>Any disease of the kidney or bladder?</label>
                                <select name="cars" id="cars">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                </select>

                                <label>Any history of rheumatic fever? </label>
                                <select name="cars" id="cars">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                </select>

                                <label>Any digestive trouble? </label>
                                <select name="cars" id="cars">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                </select>

                                <label>Any other illness, injury or operation? </label>
                                <select name="cars" id="cars">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                </select>

                                <p>Has any of your near relative suffered from</p>

                                <label>Tuberculosis? </label>
                                <select name="cars" id="cars">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                </select>

                                <label>Nervous disease? (if so give particular) </label>
                                <select name="cars" id="cars">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                </select>

                                {
                                       female
                                        &&
                                       (
                                             <>
                                             
                                                <label>Have you suffered from disease of the breast or sexual organ? </label>

                                                <select name="cars" id="cars">
                                                        <option value="yes">yes</option>
                                                        <option value="no">no</option>
                                                </select>
                                             </>
                                        )   
                                }

                                <textarea placeholder="present complaints">

                                </textarea>

                        </form>
                        
                        <Link to="/student/sixth">
                        
                                <button>next</button>
                                
                        </Link>
                </div>
        )
}

