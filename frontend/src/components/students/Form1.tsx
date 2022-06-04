
import '../../css/input.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { incrementCount, decrementCount } from '../../features/student/StudentSlice'
import { useState } from 'react'

export const Form1 = () => {

        const count = useAppSelector(state => state.student.count)
        
        const dispatch = useAppDispatch()

        const [ surname, setSurname ] = useState<string>('')
        const [ otherName, setOtherName ] = useState<string>('')
        const [ yearOfAdmission, setYearOfAdmission ] = useState<string>('')
        const [ faculty, setFaculty ] = useState<string>('')
        const [ department, setDepartment ] = useState<string>('')
        const [ religion, setReligion ] = useState<string>('')
        const [ date, setDate ] = useState<string>('')
        const [ office, setOffice ] = useState<string>('')

        // console.log(name)

        return (
                <>
                {
                        count === 1 
                        &&
                        (
                                <div className="form_root main">
                                        <div className="form_root flex_one">
                                                <h2 className="stats h1 new_font">
                
                                                STEP {count} / 6
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
                                                        <input type="text" value={otherName} onChange={(e) => setOtherName(e.target.value)} required />
                                                </div>
                                                
                                                <div className="input-field">
                                                        <label htmlFor="year_of_admission">year of admission:</label>
                                                        <input type="text" value={yearOfAdmission} onChange={(e) => setYearOfAdmission(e.target.value)} required />
                                                </div>
                                                
                                                <div className="input-field">
                                                        <label htmlFor="faculty">faculty:</label>
                                                        <input type="text" value={faculty} onChange={(e) => setFaculty(e.target.value)} required />
                  
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
                                                        <label htmlFor="date">date:</label>
                                                        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} required />
                                                </div>
                
                                                <div className="input-field">
                                                        <label htmlFor="office_address">office address:</label>
                                                        <input type="text" value={office} onChange={(e) => setOffice(e.target.value)} required />
                                                </div>
                
                                                {/* <Link to="/student/fourth"> */}
                                        
                                                        <button className="stats button"  onClick={() => dispatch(decrementCount()) }>prev</button>
                                                        
                                                {/* </Link> */}
                                                
                                                {/* <Link to="/student/second"> */}
                                        
                                                        <button className="stats button" style={{marginLeft: "65px"}} onClick={() => dispatch(incrementCount()) } >next</button>
                                                        
                                                {/* </Link> */}
                                        </div>
                
                
                                </div>

                        )
                }
                </>
        )
}

