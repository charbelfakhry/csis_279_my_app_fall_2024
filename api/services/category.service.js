const {query} = require("../database/db");
const {moment} = require("moment");

const loadCategories = async() => {
    let sql = `SELECT * FROM categories`;
    const categories = await query(sql) ;

    let result = [];
    for(let category of categories)
    {
        let cat = {
            ID: category.category_id,
            NAME: category.category_name,
            CreatedAt: moment(category.created_at).format("YYYY-MM-DD"),
            UpdatedAt: moment(category.updated_at).format("YYYY-MM-DD"),

        }
        result.push(cat);
    }

    return result;

}

module.exports = {
    loadCategories,
}