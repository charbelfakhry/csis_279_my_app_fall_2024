import { React, useEffect, useState } from "react";

const UserForm = ({ user, updateUser }) => {

    const [name, setName] = useState(user?.name);
    const [password, setPassword] = useState(user?.password);
    const [grade, setGrade] = useState(user?.grade);

    const updateUserForm = (event) => {
        event.preventDefault();
        const u = {
            id: user?.id,
            name: name,
            password: password,
            grade: grade,
        }
        updateUser(u);
    }

    useEffect(()=>{
        if(user){
            setName(user?.name);
            setPassword(user?.password);
            setGrade(user?.grade);
        }
    }, [])

    return (
        <>
            <h3>Hello {user?.name}</h3>
            <form>
                <div className="form-group">
                    <label>ID</label>
                    <input type="input" disabled className="form-control" value={user?.id} />
                </div>
                <div className="form-group">
                    <label>NAME</label>
                    <input type="input" className="form-control" value={name} onChange={(event)=>setName(event.target.value)}  />
                </div>
                <div className="form-group">
                    <label>PASSWORD</label>
                    <input type="input" className="form-control" value={password} onChange={(event)=>setPassword(event.target.value)} />
                </div>
                <div className="form-group">
                    <label>GRADE</label>
                    <input type="input" className="form-control" value={grade} onChange={(event)=>setGrade(event.target.value)} />
                </div>
                
                <button className="btn btn-primary" onClick={(event)=>updateUserForm(event)}>Update</button>
            </form>
        </>
    )
}

export default UserForm;