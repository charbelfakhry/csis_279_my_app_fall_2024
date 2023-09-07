import {React, useEffect, useState} from "react";

const UserTable = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        setUsers(dummyUsers());
    }, []);

    const dummyUsers = () => {
        var users = [];
        for(let i = 0; i < 10; i++)
        {
            let user = {
                id: i,
                name: `name ${i}`,
                password: `passord ${i}`,
                grade: randomInt(55, 100),
            }
            users.push(user);
        }
        return users;
    }

    const addUser = (event) =>{
        event.preventDefault();
        const user = {
            id: users.length,
            name: "name "+users.length,
            password: "pass"+users.length,
            grade: randomInt(55, 100),
        }
        setUsers([...users, user]);
    }

    const randomInt = (min, max) => {
        let num = Math.floor(Math.random() * (max - min + 1) + min); 
        return num;
    }
    

    return(
        <>
            <button onClick={(event)=>addUser(event)} className="btn btn-sm btn-secondary">Add User</button>
            <table className="table table-dark table-striped">
                <thead>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PASSWORD</th>
                    <th>Grade</th>
                </thead>
                <tbody>
                    {
                        users.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.passowrd}</td>
                                    <td>{item.grade}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default UserTable;