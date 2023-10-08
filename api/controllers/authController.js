const {authenticate, getAllUsers} = require("../services/authService")

const authenticateController = async(req, res)=>{
    const {user} = req.body;
    // check if the variable email is not null and not undefined
    //validation 
    if(!user){
        return res.status(401).json({message: "Unauthorized"});
    }
    const result = await authenticate(user);
    console.log(result);

    if(result.status === 200){
        // generate the JWT token and send it back to React. to be later implemented
        //const token = jwt.sign({userId: result?.user?.client_id}, secretKey);
        //console.log(token);

        return res.status(200).json({message: result.message, user: result.user, token: "token"});
    }
    //inappropriate request
    res.status(result.status).json(result.message);


}

const getAllUsersController = async(req, res)=>{
    try{
        const users = await getAllUsers();
    }catch(error){
        res.status(500).json({error: "Internal server error"});
    }
}

module.exports = {
    authenticateController,
    getAllUsersController,
}