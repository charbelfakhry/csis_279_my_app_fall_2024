import {React, useEffect, useState} from "react";
import UserForm from "./UserForm";
import UserService from "../../services/UserService";

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    // on creation complete
    useEffect(()=>{
        setUsers(dummyUsers());
        loadUsersFromDB();
    }, []);

    const loadUsersFromDB = async() =>{
        let users = await UserService.loadUsers();
        users = users?.data?.result;
        console.log(users);
    }

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

    const selectUser = (user) =>{
        console.log(user);
        setSelectedUser(user);
    }

    //Function for deleting user, with id as param
    const deleteUser = (id) => {
        const updatedUsers = users.filter(user => user.id !== id);
        
        // same as filter.
        const filteredUsers = []
        for (let i = 0; i < users.length; i++) {
            if (users[i].id !== id) {
                filteredUsers.push(users[i]);
            }
        }
        setUsers(filteredUsers);
        // or
        //setUsers(updatedUsers);
    }

    const randomInt = (min, max) => {
        let num = Math.floor(Math.random() * (max - min + 1) + min); 
        return num;
    }

    const updateUser1 = (user) =>{

        let updatedUsers = users;
        console.log(users)
        for(let i = 0; i < updatedUsers.length; i++)
        {
            let item = updatedUsers[i];
            if(item.id === user?.id){
                updatedUsers[i] = user;
            }
        }
        console.log(updatedUsers);
        setUsers(updatedUsers);

    }

    const updateUser2 = (user) =>{

        let updatedUsers = users.map((item) => (
            item.id === user.id ? {
                id: user.id,
                name: user.name,
                password: user.password,
                grade: user.grade
            } : item)
        )

        setUsers(updatedUsers);

    }

    // const saveUser = () => {
    //     let temp = editedUser;
    //     temp.id = selectedUser.id;

    //     let tempUsers = users.filter(u => u.id !== temp.id);
    //     tempUsers.unshift(temp);

    //     setUsers(tempUsers);
    // };
    

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
                                    <td> <button onClick={()=>deleteUser(item.id)} className="btn btn-danger">Delete User </button></td>
                                    <td> <button onClick={()=>selectUser(item)} className="btn btn-secondary">Select User </button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <UserForm user={selectedUser} updateUser={updateUser2} />
        </>
    )
}

export default UserTable;