
import { useState } from "react"


export const NurseStudentForm = () => {

        const [bplevel, setBplevel] = useState<string>('')
        const [healthStatus, setHealthStatus] = useState<string>('')

        console.log(setBplevel)

        return (
                <div>
                        <div className="NSFlogin">
                                <h1 style={{fontWeight: 100}}>AJOSEH OLABISI MINASU</h1>
                                <h1>17059192</h1>
                                {/* <form method="post" action=""> */}
                                <p><input type="text" value={bplevel} placeholder="bp level" className="NSF" onChange={(e) => setBplevel(e.target.value) } /></p>
                                <p><input type="text" name="password" value={healthStatus} placeholder="health status" className="NSF" onChange={(e) => setHealthStatus(e.target.value) } /></p>

                                {/* <p className="remember_me">
                                <label>
                                        <input type="checkbox" name="remember_me" id="remember_me" className="NSF" />
                                        Remember me 
                                </label>
                                </p> */}
                                <p className="submit"><input type="submit" name="commit" value="SEND" className="NSF" /></p>
                                {/* </form> */}
                        </div>
                </div>
        )
}