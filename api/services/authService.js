const { query } = require("../database/db");


const authenticate = async (data) =>{
    const { email, password } = data;
    console.log(email, password);
    const sql = `SELECT * FROM users
    WHERE user_email = ? AND user_password = ?`;
    console.log(sql);
    try {
        const user = await query(sql, [email, password]);

        if (!user) {
            return { status: 401, message: "cannot login with these credentials!" }
        }

        return { status: 200, message: "Successful", user: user }
    } catch (error) {
        return { status: 500, message: "internal error" }
    }

}
module.exports = {
    authenticate,
}