
import '../../css/input.css'
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { incrementCount, decrementCount } from "../../features/student/StudentSlice"
import { useState } from "react"


export const Form4 = () => {


        const count = useAppSelector(state => state.student.count)
        const studentData = useAppSelector(state => state.student.studentData)

        
        const {surname, otherNames, yearOfAdmission, faculty, department, religion, homeAddress, gender, nationality, ethnicGroup, maritalStatus, telPhone } = studentData

        const dispatch = useAppDispatch()

        // all LG means LOCAL GUARDIAN 
        const [guardianName, setguardianName] = useState<string>('')
        const [guardianRel, setguardianRel] = useState<string>('')
        const [guardianOffAdd, setguardianOffAdd] = useState<string>('')
        const [guardianTelNum, setguardianTelNum] = useState<string>('')
        const [guardianResAdd, setguardianResAdd] = useState<string>('')
 
        // console.log(guardianName)

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
                                        <input type="text" value={guardianName} onChange={(e) => setguardianName(e.target.value)} required />
                                </div>
                                
                                <div className="input-field">
                                        <label htmlFor="relationship">relationship:</label>
                                        <input type="text" value={guardianRel} onChange={(e) => setguardianRel(e.target.value)} required />
                                </div>
                                
                                <div className="input-field">
                                        <label htmlFor="office_address">office_address:</label>
                                        <input type="text" value={guardianOffAdd} onChange={(e) => setguardianOffAdd(e.target.value)} required />
                                </div>
                                
                                <div className="input-field">
                                        <label htmlFor="Telephone_No">Telephone_No:</label>
                                        <input type="text" value={guardianTelNum} onChange={(e) => setguardianTelNum(e.target.value)} required />
                                </div> 
                                
                                <div className="input-field">
                                        <label htmlFor="Residence">Residence:</label>
                                        <input type="text" value={guardianResAdd} onChange={(e) => setguardianResAdd(e.target.value)} required />
                                </div>

                                
                                {/* <Link to="/student/fourth"> */}
                        
                                        <button className="stats button" onClick={() => dispatch(decrementCount())} >prev</button>
                                        
                                {/* </Link> */}

                                {/* <Link to="/student/fifth"> */}
                        
                                        <button 
                                                className="stats button" 
                                                style={{marginLeft: "65px"}} 
                                                onClick={() => dispatch(incrementCount({
                                                        
                                                        surname, otherNames, yearOfAdmission, faculty, department, religion,
                                                        homeAddress, gender, nationality, ethnicGroup, maritalStatus, telPhone,
                                                        guardianName, guardianRel, guardianOffAdd, guardianTelNum, guardianResAdd
                                                        
                                                }))} 
                                                // disabled={
                                                                       
                                                //         guardianName === '' 
                                                //         || 
                                                //         guardianRel === '' 
                                                //         || 
                                                //         guardianOffAdd === '' 
                                                //         || 
                                                //         guardianTelNum === '' 
                                                //         || 
                                                //         guardianResAdd === '' 
                                                //         ?
                                                //         true 
                                                //         : 
                                                //         false
                                                // }
                                        >next</button>
                                        
                                {/* </Link> */}
                                
                        </div>

                </div>
        )
}

