import { getToken } from "../UTILS/localStorageUtils";
import http from "../http-common";

const getProducts = () =>{
    return http.get(`/products/products`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
}

const UserService = {
    getProducts,
}

export default UserService;