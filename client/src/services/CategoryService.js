import { getToken } from "../UTILS/localStorageUtils";
import http from "../http-common";

const getCategories = () =>{
    return http.get(`/category/categories`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
}

const CategoryService = {
    getCategories,
}

export default CategoryService;