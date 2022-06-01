
import { Link } from "react-router-dom"
import '../../css/input.css'
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { incrementCount, decrementCount } from "../../features/student/StudentSlice"
import { useState } from "react"


export const Form4 = () => {


        const count = useAppSelector(state => state.student.count)

        const dispatch = useAppDispatch()

        // all LG means LOCAL GUARDIAN 
        const [nameLG, setNameLG] = useState<string>('')
        const [relationshipLG, setRelationshipLG] = useState<string>('')
        const [officeAddressLG, setOfficeAddressLG] = useState<string>('')
        const [telephoneNoLG, setTelephoneNoLG] = useState<string>('')
        const [residenceLG, setResidenceLG] = useState<string>('')
 
        // console.log(nameLG)

        return (
                <div className="form_root main">
                        <div className="form_root flex_one">
                                <h2 className="stats h1 new_font">

                                STEP {count} / 6
                                </h2>
                                <img src="../../../form_leaf.svg" alt="designs" />
                        </div>
                        
                        <div className="form_root flex_two">

                                <h2 className="stats h1">YOUR LOCAL GUARDIAN <br /> DETAILS</h2>
                                
                                <div className="input-field">
                                        <label htmlFor="Name">Name:</label>
                                        <input type="text" value={nameLG} onChange={(e) => setNameLG(e.target.value)} required />
                                </div>
                                
                                <div className="input-field">
                                        <label htmlFor="relationship">relationship:</label>
                                        <input type="text" value={relationshipLG} onChange={(e) => setRelationshipLG(e.target.value)} required />
                                </div>
                                
                                <div className="input-field">
                                        <label htmlFor="office_address">office_address:</label>
                                        <input type="text" value={officeAddressLG} onChange={(e) => setOfficeAddressLG(e.target.value)} required />
                                </div>
                                
                                <div className="input-field">
                                        <label htmlFor="Telephone_No">Telephone_No:</label>
                                        <input type="text" value={telephoneNoLG} onChange={(e) => setTelephoneNoLG(e.target.value)} required />
                                </div> 
                                
                                <div className="input-field">
                                        <label htmlFor="Residence">Residence:</label>
                                        <input type="text" value={residenceLG} onChange={(e) => setResidenceLG(e.target.value)} required />
                                </div>

                                
                                {/* <Link to="/student/fourth"> */}
                        
                                        <button className="stats button" onClick={() => dispatch(decrementCount())} >prev</button>
                                        
                                {/* </Link> */}

                                {/* <Link to="/student/fifth"> */}
                        
                                        <button className="stats button" style={{marginLeft: "65px"}} onClick={() => dispatch(incrementCount())} >next</button>
                                        
                                {/* </Link> */}
                                
                        </div>

                </div>
        )
}

