
var jwt = require('jsonwebtoken');
const { getAllProducts } = require("../services/product.service");
require('dotenv').config();



const getAllProductsController = async(req, res)=>{
    try{
        const products = await getAllProducts();
        console.log(products);
        res.status(200).json({products});
    }catch(error){
        res.status(500).json({error: "Internal server error"});
    }
}

module.exports = {
    getAllProductsController
}