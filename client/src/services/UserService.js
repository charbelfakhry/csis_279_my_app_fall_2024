import http from "../http-common";

const loadUsers = () =>{
    return http.get(`/auth/users`);
}

const UserService = {
    loadUsers,
}

export default UserService;