const { query } = require("../database/db");




const getAllProducts = async () =>{
    try{
        let sql = "select * from products";
        const products = await query(sql);
        return products;
    }catch(error){
        throw new Error(error);
    }

}
module.exports = {
    getAllProducts,
}