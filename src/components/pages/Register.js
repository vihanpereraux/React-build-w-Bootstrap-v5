import react from "react";
import { Link } from "react-router-dom";

function Register(){
    return(
        <div className="container">
            <h1>Register</h1> <br />
            <form>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" id="username"></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="password"></input>
                </div>
                <Link to="/login">
                    <a className="btn btn-primary">Login</a>
                </Link>           
            </form>
        </div>
    );
}

export default Register