import { getToken } from "../UTILS/localStorageUtils";
import http from "../http-common";

const getAll = () =>{
    return http.get(`/auth/users`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
}

const authenticate = (user) => 
{
    return http.post(`/auth/authenticate`, user);
}

const UserService = {
    getAll,
    authenticate,
}

export default UserService;