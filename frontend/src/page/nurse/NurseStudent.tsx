
import '../../css/nurse.css'
import { Link } from 'react-router-dom'

export const NurseStudent = () => {
        return (
                <div>
                        <div>
                                <button>pending</button>
                                <button>verified</button>
                        </div>
                        <div>
                                <div>
                                        <table className="NStable">
                                                <thead className="NSthead">
                                                        <tr className="NStr">
                                                                <th className="NSth">S.No</th>
                                                                <th className="NSth">Name</th>
                                                                <th className="NSth">matric</th>
                                                                <th className="NSth">View</th>
                                                                <th className="NSth">Status</th>
                                                        </tr>
                                                </thead>
                                                
                                                <tbody className="NStbody">
                                                        <tr className="NStr">
                                                                <td className="NStd" data-label="S.No">1</td>
                                                                <td className="NStd" data-label="Age">Ajoseh Olabisi Minasu</td>
                                                                <td className="NStd" data-label="Name">170591012</td>
                                                                <td className="NStd" data-label="Marks%">
                                                                <button className="stats button">
                                                                        <Link to="/nurse/student/form">
                                                                                view
                                                                        </Link>
                                                                </button>
                                                                </td>
                                                                <td className="NStd" data-label="Staus">pending</td>
                                                        </tr>

                                                        <tr className="NStr">
                                                                <td className="NStd" data-label="S.No">2</td>
                                                                <td className="NStd" data-label="Age">Ajoseh Olabisi Minasu</td>
                                                                <td className="NStd" data-label="Name">170591012</td>
                                                                <td className="NStd" data-label="Marks%">
                                                                <button className="stats button">
                                                                        <Link to="/nurse/student/form">
                                                                                view
                                                                        </Link>
                                                                </button>
                                                                </td>
                                                                <td className="NStd" data-label="Staus">pending</td>
                                                        </tr>

                                                        <tr className="NStr">
                                                                <td className="NStd" data-label="S.No">3</td>
                                                                <td className="NStd" data-label="Age">Ajoseh Olabisi Minasu</td>
                                                                <td className="NStd" data-label="Name">170591012</td>
                                                                <td className="NStd" data-label="Marks%">
                                                                <button className="stats button">
                                                                        <Link to="/nurse/student/form">
                                                                                view
                                                                        </Link>
                                                                </button>
                                                                </td>
                                                                <td className="NStd" data-label="Staus">verified</td>
                                                        </tr>

                                                        <tr className="NStr">
                                                                <td className="NStd" data-label="S.No">4</td>
                                                                <td className="NStd" data-label="Age">Ajoseh Olabisi Minasu</td>
                                                                <td className="NStd" data-label="Name">170591012</td>
                                                                <td className="NStd" data-label="Marks%">
                                                                        
                                                                <button className="stats button NS">
                                                                        <Link to="/nurse/student/form">
                                                                                view
                                                                        </Link>
                                                                </button>
                                                                </td>
                                                                <td className="NStd" data-label="Staus">verified</td>
                                                        </tr>
                                                </tbody>
                                        </table>
                                </div>
                        </div>
                </div>
        )
}