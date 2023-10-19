const {authenticate, getAllUsers} = require("../services/authService");
var jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateController = async(req, res)=>{
    const {user} = req.body;
    // check if the variable email is not null and not undefined
    //validation 
    if(!user){
        return res.status(401).json({message: "missing data"});
    }
    const result = await authenticate(user);

    if(result.status === 200){
        // generate the JWT token and send it back to React.
        const token = jwt.sign({userId: result?.user?.client_id}, process.env.SECRET_KEY);

        return res.status(200).json({message: result.message, user: result.user, token: token});
    }
    //inappropriate request
    res.status(401).json({message: "Unauthorized"});


}

const getAllUsersController = async(req, res)=>{
    try{
        const users = await getAllUsers();
        res.status(200).json({users});
    }catch(error){
        res.status(500).json({error: "Internal server error"});
    }
}

module.exports = {
    authenticateController,
    getAllUsersController,
}