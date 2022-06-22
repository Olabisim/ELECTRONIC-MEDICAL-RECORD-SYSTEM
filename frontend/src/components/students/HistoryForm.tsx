
import '../../css/select_option.css'
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { incrementCount, decrementCount } from "../../features/student/StudentSlice"

export const HistoryForm = () => {

        let female:boolean = true

        const count = useAppSelector(state => state.student.count)
        const studentData = useAppSelector(state => state.student.studentData)

        
        const {
                surname, otherNames, yearOfAdmission, faculty, department, religion,
                homeAddress, gender, nationality, ethnicGroup, maritalStatus, telPhone,
                guardianName, guardianRel, guardianOffAdd, guardianTelNum, guardianResAdd } = studentData

        const dispatch = useAppDispatch()
        

        // <h2>HISTORY (Personal & Family) </h2>

        return (
                <div className="form_root main">
                <div className="form_root flex_one" style={{width: '30vw'}}>
                        <h2 className="stats h1 new_font">

                        STEP {count} / 6
                        </h2>
                        <img src="../../../form_leaf.svg" alt="designs" />
                </div>
                
                <div className="form_root flex_two">

                        <h2 className="stats h1">HISTORY (Personal & Family) <br /> </h2>

                                <div className="history arrangement">
                                        
                                        <span>Any nervous disease?</span>

                                        <section className="arrangement_inside">

                                                <div className="can-toggle">
                                                        <input id="a" type="checkbox" />
                                                        <label htmlFor="a">
                                                        <div className="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                                                        </label>
                                                </div>
                                        </section>

                                </div>
                                
                                <div className="history arrangement">
                                        
                                        <span>Asthma, blood-splitting, pleurisy of any disease of chest or lungs?</span>
                                        
                                        <section className="arrangement_inside">

                                                <div className="can-toggle">
                                                        <input id="b" type="checkbox" />
                                                        <label htmlFor="b">
                                                        <div className="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                                                        </label>
                                                </div>
                                                
                                        </section>

                                </div>

                                <div className="history arrangement">
                                        
                                        <span>Heart trouble of any kind? </span>

                                        <section className="arrangement_inside">

                                                <div className="can-toggle">
                                                        <input id="c" type="checkbox" />
                                                        <label htmlFor="c">
                                                        <div className="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                                                        </label>
                                                </div>
                                        </section>

                                </div>

                                <div className="history arrangement">
                                        
                                        <span>Jaundice? </span>
                                        
                                        <section className="arrangement_inside">
                                                <div className="can-toggle">
                                                        <input id="d" type="checkbox" />
                                                        <label htmlFor="d">
                                                        <div className="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                                                        </label>
                                                </div>
                                        </section>
                                </div>

                                <div className="history arrangement">
                                        
                                        <span>Any disease of the kidney or bladder? </span>
                                        
                                        <section className="arrangement_inside">
                                                <div className="can-toggle">
                                                        <input id="e" type="checkbox" />
                                                        <label htmlFor="e">
                                                        <div className="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                                                        </label>
                                                </div>
                                        </section>
                                </div>

                                <div className="history arrangement">
                                        
                                        <span>Any history of rheumatic fever?</span>
                                        
                                        <section className="arrangement_inside">
                                                <div className="can-toggle">
                                                        <input id="f" type="checkbox" />
                                                        <label htmlFor="f">
                                                        <div className="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                                                        </label>
                                                </div>
                                        </section>
                                </div>

                                <div className="history arrangement">
                                        
                                        <span>Any digestive trouble? </span>
                                        
                                        <section className="arrangement_inside">
                                                <div className="can-toggle">
                                                        <input id="g" type="checkbox" />
                                                        <label htmlFor="g">
                                                        <div className="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                                                        </label>
                                                </div>
                                        </section>
                                </div>

                                <div className="history arrangement">
                                        
                                        <span>Any other illness, injury or operation? </span>
                                        
                                        <section className="arrangement_inside">
                                                <div className="can-toggle">
                                                        <input id="h" type="checkbox" />
                                                        <label htmlFor="h">
                                                        <div className="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                                                        </label>
                                                </div>
                                        </section>
                                </div>


                                <p>Has any of your near relative suffered from</p>


                                <div className="history arrangement">
                                        
                                        <span>Tuberculosis?  </span>
                                        
                                        <section className="arrangement_inside">
                                                <div className="can-toggle">
                                                        <input id="i" type="checkbox" />
                                                        <label htmlFor="i">
                                                        <div className="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                                                        </label>
                                                </div>
                                        </section>
                                </div>

                                <div className="history arrangement">
                                        
                                        <span>Nervous disease? (if so give particular)   </span>
                                        
                                        <section className="arrangement_inside">
                                                <div className="can-toggle">
                                                        <input id="j" type="checkbox" />
                                                        <label htmlFor="j">
                                                        <div className="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                                                        </label>
                                                </div>
                                        </section>
                                </div>


                                {
                                       female
                                        &&
                                       (
                                             <>
                                             
                                                <div className="history arrangement">
                                        
                                                        <span>Have you suffered from disease of the breast or sexual organ? </span>
                                                                
                                                        <section className="arrangement_inside">
                                                                <div className="can-toggle">
                                                                        <input id="k" type="checkbox" />
                                                                        <label htmlFor="k">
                                                                        <div className="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                                                                        </label>
                                                                </div>
                                                        </section>

                                                </div>

                                             </>
                                        )   
                                }

                        
                                {/* <Link to="/student/fourth"> */}
                        
                                        <button className="stats button" onClick={() => dispatch(decrementCount())} >prev</button>
                                        
                                {/* </Link> */}

                                {/* <Link to="/student/fifth"> */}
                        
                                        <button className="stats button" style={{marginLeft: "65px"}} onClick={() => dispatch(incrementCount({
                                                
                                                surname, otherNames, yearOfAdmission, faculty, department, religion,
                                                homeAddress, gender, nationality, ethnicGroup, maritalStatus, telPhone,
                                                guardianName, guardianRel, guardianOffAdd, guardianTelNum, guardianResAdd
                                        }))} >next</button>
                                        
                                {/* </Link> */}
                </div>
                </div>
        )
}

