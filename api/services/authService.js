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

module.exports = {
    loadUsers,
}