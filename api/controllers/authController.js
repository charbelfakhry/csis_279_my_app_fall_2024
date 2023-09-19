const authService = require("../services/authService")

const loadAllUser = async(req, res) => {
    try{
        const result = await authService.loadUsers();
        res.status(200).json({message: "Ok", result: result});
    }catch(error){
        res.status(500).json({message: "Internal server erorr"});
    }
}

module.exports = {
    loadAllUser,
}