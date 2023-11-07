
var jwt = require('jsonwebtoken');
const { loadCategories } = require('../services/category.service');
require('dotenv').config();



const getAllCategoriesController = async(req, res)=>{
    try{
        // validation if needed
        const categories = await loadCategories();
        console.log(categories);
        res.status(200).json({categories});
    }catch(error){
        res.status(500).json({error: "Internal server error"});
    }
}

module.exports = {
    getAllCategoriesController,
}