const { query } = require("../database/db");


const loadUsers = async() =>{
    try{
        let sql = `select * from users`;
        const result = await query(sql);
        return result;
    }catch(error){
        console.error(error);
        throw new Error(error);
    }
}

const loadUsers1 = async(username, password) =>{
    try{
        let sql = `select * from users where username = ?
        and password = ?`;
        const result = await query(sql, [username, password]);
        return result;
    }catch(error){
        console.error(error);
        throw new Error(error);
    }
}

module.exports = {
    loadUsers,
    loadUsers1,
}