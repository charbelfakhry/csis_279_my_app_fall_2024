import React, {useState} from "react";
import {RiUserFill, RiLockPasswordFill} from 'react-icons/ri';
import UserService from "../services/UserService";
import { toast } from "react-toastify";

const Login = ({ onLogin }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async() =>{
        if(username !== '' && password !== ''){
            const user = {
                email: username,
                password
            }
            const result = await UserService.authenticate({user});
            if(result?.data === "Unauthenticated"){
                toast.error("WRONG USERNAME/PASSWORD");
                reset();
            }else{
                //local storage
                const authenticatedUser = result?.data;
                console.log(authenticatedUser);
                localStorage.setItem("user", JSON.stringify(authenticatedUser));
                onLogin();
            }
        }
    }

    const reset = () => {
        setUsername("");
        setPassword("");
    }

    return(
        <>
        <div className="login-container">
            <h2>Login</h2>
            <hr style={{color: "#333", borderStyle: "dotted"}}/>
            <div>
                <RiUserFill className="input-icon" />
                <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
            </div>
            <hr style={{color: "#333", borderStyle: "dotted"}}/>
            <div>
                <RiLockPasswordFill className="input-icon" />
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <hr style={{color: "#333", borderStyle: "dotted"}}/>
            <button className="btn btn-sm text-light fw-bold" style={{backgroundColor: "#3498db"}} onClick={handleLogin}>
                Login
            </button>
        </div>
        </>
    )
}

export default Login;