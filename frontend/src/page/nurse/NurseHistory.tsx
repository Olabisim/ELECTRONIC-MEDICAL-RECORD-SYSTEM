

import '../../css/report_table.css'

export const NurseHistory = () => {
        return (
                <div className="student_home main">

                        <div className="student_home nav">

                                <div className="student_home navcon">


                                        <div className="student_home navin">

                                                <i className="fa fa-home" aria-hidden="true"></i>
                                                <span>Home</span>
                                        </div>

                                        <div className="student_home navin">
                                                <i className="fa fa-print" aria-hidden="true"></i>
                                                <span>Students</span>

                                        </div>

                                        <div className="student_home navin">
                                                <i className="fa fa-history" aria-hidden="true"></i>
                                                <span>History</span>

                                        </div>
                                        <div className="student_home navin">
                                                <i className="fa fa-sign-out" aria-hidden="true"></i>
                                                <span>Log Out</span>

                                        </div>

                                </div>

                        </div>

                        <div className="history_main">
                                <div className="history_main_in">

                                        <h2 className="h2">NURSE REPORT</h2>
                                        <p>This is a list of activities performed.</p>

                                        <div className="history_main_head">
                                                <div>
                                                        <h4>Search</h4>
                                                        <input type="text" />
                                                </div>
                                                <div>
                                                        <h4>Order by: </h4>
                                                        <div>
                                                                <button className="history_main_active">date</button>
                                                                <button>name</button>
                                                        </div>
                                                </div>
                                        </div>

                                        <div>
                                                
                                                {/* <h2>Sticky Header Only</h2> */}
                                                <div className="table-wrapper">
                                                <table className="sticky-header">
                                                <thead>
                                                <tr>
                                                        <th>TYPE</th>
                                                        <th>NAME</th>
                                                        <th>STATUS</th>
                                                        <th>ACTIVITY</th>
                                                        <th>DATE</th>
                                                        <th>VIEW</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                </tr>
                                                <tr>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                </tr>
                                                <tr>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                </tr>
                                                <tr>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                </tr>
                                                <tr>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                </tr>
                                                <tr>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                </tr>
                                                <tr>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                </tr>
                                                <tr>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                </tr>
                                                <tr>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                </tr>
                                                <tr>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                </tr>
                                                <tr>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                </tr>
                                                <tr>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                </tr>
                                                <tr>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                        <td>Text</td>
                                                </tr>
                                                </tbody>
                                                </table>
                                                </div>

                                        </div>
                                </div>
                        </div>
                </div>
        )
}