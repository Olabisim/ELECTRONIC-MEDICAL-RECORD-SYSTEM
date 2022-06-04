

export const NurseStudentForm = () => {
        return (
                <div>
                        <div className="NSFlogin">
                                <h1 style={{fontWeight: 100}}>AJOSEH OLABISI MINASU</h1>
                                <h1>17059192</h1>
                                <form method="post" action="">
                                <p><input type="text" name="login" value="" placeholder="bp level" className="NSF" /></p>
                                <p><input type="text" name="password" value="" placeholder="health status" className="NSF" /></p>

                                {/* <p className="remember_me">
                                <label>
                                        <input type="checkbox" name="remember_me" id="remember_me" className="NSF" />
                                        Remember me 
                                </label>
                                </p> */}
                                <p className="submit"><input type="submit" name="commit" value="SEND" className="NSF" /></p>
                                </form>
                        </div>
                </div>
        )
}