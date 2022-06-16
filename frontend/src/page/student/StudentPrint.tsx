

import { SideNav } from "../../components/students/SideNav"

import '../../css/studentdoc/firstpage.css'


export const StudentPrint = () => {
        return (
                <div className="student_home main">

                        <>
                                <SideNav />
                        </>


                        <div style={{width: '100%'}}>

                                <div className="firstpage_first_flex">
                                        <div className="firstpage_border_spacing">
                                                <h4>SURNAME</h4>
                                                <div>
                                                        <h4>AJOSEH</h4>
                                                </div>
                                        </div>
                                        <div className="firstpage_border_spacing rotate_firstpage_border">
                                                <h4>HOSPITAL NUMBER</h4>
                                                <div>
                                                        <h4>AJOSEH</h4>
                                                </div>
                                        </div>

                                </div>
                                <div className="firstpage_first_flex firstpage_seconddiv_first_flex">
                                        <div className="firstpage_border_spacing">
                                                <h4>OTHER NAMES</h4>
                                                <div>
                                                        <h4>AJOSEH</h4>
                                                </div>
                                        </div>
                                        <div className="firstpage_border_spacing">
                                                <h4>YEAR OF ADMISSION</h4>
                                                <div>
                                                        <h4>AJOSEH</h4>
                                                </div>
                                        </div>

                                </div>
                                <div className="firstpage_thirddiv_first_flex">
                                        <div></div>
                                        <div>
                                                <div>
                                                                
                                                        <label>FACULTY: </label>
                                                        <input type="text" />

                                                </div>

                                                <div>
                                                        <label>DEPARTMENT: </label>
                                                        <input type="text" />

                                                </div>

                                                <div>

                                                        <label>RELIGION: </label>
                                                        <input type="text" />

                                                </div>
                                        </div>

                                </div>

                                <div className="firstpage_end">
                                        <h2>LAGOS STATE UNIVERSITY <br />OJO </h2>
                                        <div className="firstpage_end_border">
                                                <h3>STUDENT'S MEDICAL RECORD</h3>
                                        </div>
                                        <div className="firstpage_end_border">
                                                <h3>PRIVATE AND CONFIDENTIAL</h3>
                                        </div>

                                </div>


                        </div>



                </div>
        )
}
