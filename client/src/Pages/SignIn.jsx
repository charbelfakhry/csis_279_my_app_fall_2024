import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../services/UserService";

const SignIn = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate();

    useEffect(()=>{
        
    });

    const handleLogin = async(event) => {
        event.preventDefault();

        let user = {
            username,
            password
        };

        const response = await UserService.authenticate(user);
        console.log(response);
        
    }

    return (
        <>
            <div className="login-container">
                <h2>Login</h2>
                <div>
                    <input type="text" placeholder="Username" onChange={(event)=>setUsername(event.target.value)} />
                </div>
                <div>
                    <input type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)} />
                </div>
                <button className="btn btn-sm fw-bold" style={{backgroundColor: "grey"}} onClick={handleLogin}>
                    Login
                </button>
            </div>
        </>
    )
}

export default SignIn;