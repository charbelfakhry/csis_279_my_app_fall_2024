import React, { useEffect, useState } from "react";
import CategoryService from "../services/CategoryService";
import CustTable from "../Components/resuables/CustTable";

const [data, setData] = useState([]);

useEffect(()=>{
    loadCategories();
});

const loadCategories = async()=>{
    const result = CategoryService.getCategories();
    setData(result);
}

const Category = () => {
    <React.Fragment>
        <CustTable data={data}/>
    </React.Fragment>
}

export default Category;