import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate();

    useEffect(()=>{
        
    });

    const onInputChange = (event, name) =>{

    }

    return (
        <>
            <div>
                <h2>Login</h2>
                <div>
                    <input type="text" placeholder="Username" onChange={(event)=>onInputChange(event, "username")} />
                </div>
                <div>
                    <input type="password" placeholder="Password" onChange={(event)=>onInputChange(event, "password")} />
                </div>
            </div>
        </>
    )
}

export default SignIn;