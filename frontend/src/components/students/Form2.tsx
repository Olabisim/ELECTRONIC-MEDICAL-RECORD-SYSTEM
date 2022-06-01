
import { Link } from "react-router-dom"
import '../../css/input.css'
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { incrementCount, decrementCount } from "../../features/student/StudentSlice"
import { useState } from "react"



export const Form2 = () => {

        const count = useAppSelector(state => state.student.count)

        const dispatch = useAppDispatch()

        const [ homeAddress, setHomeAddress ] = useState<string>('')
        const [ sex, setSex ] = useState<string>('')
        const [ age, setAge ] = useState<string>('')
        const [ dateOfBirth, setDateOfBirth ] = useState<string>('')
        const [ nationality, setNationality ] = useState<string>('')
        const [ ethnicGroup, setEthnicGroup ] = useState<string>('')
        const [ maritalSatus, setMaritalStatus ] = useState<string>('')
        const [ fatherTelNo, setFatherTelNo ] = useState<string>('')
        const [ motherTelNo, setMotherTelNo ] = useState<string>('')

        console.log(motherTelNo)

        return (
                <div className="form_root main">
                        <div className="form_root flex_one">
                                <h2 className="stats h1 new_font">

                                STEP {count} / 6
                                </h2>
                                <img src="../../../form_leaf.svg" alt="designs" />
                        </div>
                        <div className="form_root flex_two">
                                
                                
                                <div className="input-field">
                                        <label htmlFor="Home_Address">Home Address:</label>
                                        <input type="text" value={homeAddress} id="some" onChange={(e) => setHomeAddress(e.target.value)} required />
                                </div>
                                
                                <div className="input-field">
                                        <label htmlFor="sex">sex:</label>
                                        <input type="text" value={sex} id="some" onChange={(e) => setSex(e.target.value)} required />
                                </div>
                                
                                <div className="input-field">
                                        <label htmlFor="Date_of_Birth">Date of Birth:</label>
                                        <input type="text" value={dateOfBirth} id="some" onChange={(e) => setDateOfBirth(e.target.value)} required />
                                </div>
                                
                                <div className="input-field">
                                        <label htmlFor="Age">Age:</label>
                                        <input type="text" value={age} id="some" onChange={(e) => setAge(e.target.value)} required />
                                </div>
                                
                                <div className="input-field">
                                        <label htmlFor="nationality">nationality:</label>
                                        <input type="text" value={nationality} id="some" onChange={(e) => setNationality(e.target.value)} required />
                                </div>
                                
                                <div className="input-field">
                                        <label htmlFor="ethnic_group">ethnic group:</label>
                                        <input type="text" value={ethnicGroup} id="some" onChange={(e) => setEthnicGroup(e.target.value)} required />
                                </div>
                                
                                <div className="input-field">
                                        <label htmlFor="marital_status">marital status:</label>
                                        <input type="text" value={maritalSatus} id="some" onChange={(e) => setMaritalStatus(e.target.value)} required />
                                </div>

                                <div className="input-field">
                                        <label htmlFor="father_tel_No">father tel No:</label>
                                        <input type="text" value={fatherTelNo} id="some" onChange={(e) => setFatherTelNo(e.target.value)} required />
                                </div>

                                <div className="input-field">
                                        <label htmlFor="Mother_Tel_No">Mother Tel No:</label>  
                                        <input type="text" value={motherTelNo} id="some" onChange={(e) => setMotherTelNo(e.target.value)} required />
                                </div>

                                {/* <Link to="/student/fourth"> */}
                        
                                        <button className="stats button" onClick={() => dispatch(decrementCount())}>prev</button>
                                        
                                {/* </Link> */}

                                {/* <Link to="/student/fourth"> */}
                        
                                        <button className="stats button" style={{marginLeft: "65px"}}  onClick={() => dispatch(incrementCount())} >next</button>
                                        
                                {/* </Link> */}

                        </div>
                        
                </div>
        )
}

