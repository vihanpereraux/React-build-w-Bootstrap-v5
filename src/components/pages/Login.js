import React from "react";
import {Link} from 'react-router-dom'; 

function Login(){
    return(
        <div className="container">
            <h1>Login</h1> <br />
            <form>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" id="username"></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="password"></input>
                </div>
                <Link to="/home">
                    <a className="btn btn-primary" href='#'>Login</a>
                </Link>
            </form>
        </div>
    );
}

export default Login