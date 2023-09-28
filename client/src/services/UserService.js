import http from "../http-common";

const loadUsers = () =>{
    return http.get(`/auth/users`);
}

const authenticate = (user) => 
{
    return http.post(`/auth/authenticate`, user);
}

const UserService = {
    loadUsers,
    authenticate,
}

export default UserService;