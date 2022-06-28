
import '../../css/input.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { incrementCount, decrementCount } from '../../features/staff/StaffSlice'
import { useState } from 'react'

export const Form1 = () => {

        const count = useAppSelector(state => state.staff.count)
        // const staffData = useAppSelector(state => state.staff.staffData)
        
        // const {surname, otherNames, yearOfAdmission, faculty, department, religion, telPhone} = staffData

        const dispatch = useAppDispatch()

        const [ surname, setSurname ] = useState<string>('')
        const [ otherNames, setOtherName ] = useState<string>('')
        const [ dateOfBirth, setDateOfBirth ] = useState<string>('')
        const [ department, setDepartment ] = useState<string>('')
        const [ telPhone, settelPhone ] = useState<string>('')
        const [ religion, setReligion ] = useState<string>('')


        return (
                <>
                {
                        count === 1 
                        &&
                        (
                                <div className="form_root main">
                                        <div className="form_root flex_one">
                                                <h2 className="stats h1 new_font">
                
                                                STEP {count} / 3
                                                </h2>
                                                <img src="../../../form_leaf.svg" alt="designs" />
                                        </div>
                                        <div className="form_root flex_two">
                                                
                                                <div className="input-field">
                                                        <label htmlFor="name">Surname:</label>
                                                        <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} required />
                                                </div>
                                                
                                                
                                                <div className="input-field">
                                                        <label htmlFor="other_name">other names:</label>
                                                        <input type="text" value={otherNames} onChange={(e) => setOtherName(e.target.value)} required />
                                                </div>
                                                
                                                                      
                                                <div className="input-field">
                                                        <label htmlFor="department">department:</label>
                                                        <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} required />
                  
                                                </div>                                
                                                <div className="input-field">
                                                        <label htmlFor="religion">religion:</label>
                                                        <input type="text" value={religion} onChange={(e) => setReligion(e.target.value)} required />
                  
                                                </div> 
                                                <div className="input-field">
                                                        <label htmlFor="religion">Telephone Number:</label>
                                                        <input type="text" value={telPhone} onChange={(e) => settelPhone(e.target.value)} required />
                  
                                                </div> 

                                                
                                                <div className="input-field">
                                                        <label htmlFor="Date_of_Birth">Date of Birth:</label>
                                                        <input type="text" value={dateOfBirth} id="some" onChange={(e) => setDateOfBirth(e.target.value)} required />
                                                </div>
                
                                                {/* <div className="input-field">
                                                        <label htmlFor="office_address">office address:</label>
                                                        <input type="text" value={office} onChange={(e) => setOffice(e.target.value)} required />
                                                </div> */}
                
                                                {/* <Link to="/student/fourth"> */}
                                        
                                                        <button className="stats button"  onClick={() => dispatch(decrementCount()) }>prev</button>
                                                        
                                                {/* </Link> */}
                                                
                                                {/* <Link to="/student/second"> */}
                                                
                                                {/* surname(pin):""
                                                otherNames(pin):""
                                                department(pin):""
                                                religion(pin):""
                                                telPhone(pin):""
                                                date(pin):"2022-06-23T09:44:10.118Z"
                                                homeAddress(pin):""
                                                gender(pin):""
                                                dateOfBirth(pin):"2022-06-23T09:44:10.118Z"
                                                nationality(pin):""
                                                ethnicGroup(pin):""
                                                maritalStatus(pin):""
                                                userType(pin):""
                                                password(pin):"" 
                                                
                                                        const [ surname, setSurname ] = useState<string>('')
                                                        const [ otherNames, setOtherName ] = useState<string>('')
                                                        const [ dateOfBirth, setDateOfBirth ] = useState<string>('')
                                                        const [ department, setDepartment ] = useState<string>('')
                                                        const [ telPhone, settelPhone ] = useState<string>('')
                                                        const [ religion, setReligion ] = useState<string>('')
                                                */}
                                        
                                                        <button 
                                                                className="stats button" 
                                                                style={{marginLeft: "65px"}} 
                                                                onClick={() => dispatch(incrementCount({surname, otherNames, department, religion, telPhone})) } 
                                                                // disabled={
                                                                       
                                                                //         surname === '' 
                                                                //         || 
                                                                //         otherNames === '' 
                                                                //         || 
                                                                //         yearOfAdmission === '' 
                                                                //         || 
                                                                //         faculty === '' 
                                                                //         || 
                                                                //         department === '' 
                                                                //         || 
                                                                //         religion === '' 
                                                                //         || 
                                                                //         dateOfBirth === '' 
                                                                //         // || 
                                                                //         // office === '' 
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
                </>
        )
}

