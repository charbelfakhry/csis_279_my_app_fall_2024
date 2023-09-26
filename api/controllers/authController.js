const authService = require("../services/authService")

const loadAllUser = async(req, res) => {
    try{
        const result = await authService.loadUsers();
        res.status(200).json({message: "Ok", result: result});
    }catch(error){
        res.status(500).json({message: "Internal server erorr"});
    }
}

const authenticateController = async(req, res)=>{
    const {user} = req.body;
    if(!user){
        res.status(403).json({message: 'missing data'});
    }

    

    try{
        const user = await authService.loadUsers1(user?.username, user?.password);
        // if(user.length > 0){
        //     res.status(200).json({message: "authenticated", user});
        // }else{
        //     res.status(401).json({message:  "Unauthorized"});
        // }
    }catch(erorr){
        res.status(500).json({message: "Internal server error"});
    }


}

module.exports = {
    loadAllUser,
    authenticateController,
}