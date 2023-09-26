import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    useEffect(()=>{
        setIsLoggedIn(true);
    })

    const SignInClickHandler = () =>{
        if(isLoggedIn){
            navigate("/users");
        }
    }

    return (
        <>
            <h3>Sign page</h3>
            <button className="btn btn-success" onClick={()=>SignInClickHandler()}>Sgin in</button>
            <Link to="/users">Link Users</Link>
            <br />
            <a href="/aboutus">HREF About us</a>
        </>
    )
}

export default SignIn;