const { query } = require("../database/db");


const authenticate = async (data) =>{
    const { email, password } = data;
    console.log(email, password);
    const sql = `SELECT * FROM users
    WHERE user_email = ? AND user_password = ?`;
    console.log(sql);
    try {
        const user = await query(sql, [email, password]);
        if(user && user.length){
            return { status: 200, message: "Successful", user: user[0] }
        }else{
            return { status: 401, message: "cannot login with these credentials!" }
        }
    } catch (error) {
        return { status: 500, message: "internal error" }
    }
}

const getAllUsers = async () =>{
    try{
        let sql = "select * from users";
        const users = await query(sql);
        console.log(users);
        return users;
    }catch(error){
        throw new Error(error);
    }

}
module.exports = {
    authenticate,
    getAllUsers
}