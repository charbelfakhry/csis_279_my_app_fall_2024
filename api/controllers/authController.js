const {authenticate} = require("../services/authService")

const authenticateController = async(req, res)=>{
    const {user} = req.body;
    // check if the variable email is not null and not undefined
    //validation 
    if(!user){
        res.status(400).json({message: "Bad Request!"});
    }
    const result = await authenticate(user);
    console.log(result);

    if(result.status === 200){
        // generate the JWT token and send it back to React. to be later implemented
        const token = jwt.sign({userId: result?.user?.client_id}, secretKey);
        console.log(token);

        res.status(200).json(result.message, result.user, token);
    }
    //inappropriate request
    res.status(result.status).json(result.message);


}

module.exports = {
    authenticateController,
}